<template lang="pug">

.page
    pagination-wrapper-component(
        :value="currentPage"
        :quantity="paginationQuantity"

        @input="onChangePagination"
    )
        c-catalog(
            :activeCategory="activeCategory"
            :activeIds="activeIds"

            @update:activeCategory="onUpdateActiveCategory"
        )

</template>

<script lang="ts">
import {Component, Mixins} from 'vue-property-decorator'

import { PaginationWrapper } from '@/shared/ui/PaginationWrapper'
import { Catalog } from './Catalog'
import PaginationMixin from "@/shared/mixins/PaginationMixin"

import {equipmentModels} from '@/entities/equipment'
import {gql, request} from "graphql-request"
import {Maybe} from "@/types/common"
import {env} from "@/shared/config"

@Component({
    components: {
        'c-catalog': Catalog,
        'pagination-wrapper-component': PaginationWrapper,
    }
})
export default class EquipmentFamily extends Mixins(PaginationMixin) {
    activeCategory: Maybe<number> = null

    activeIds: number[] = []

    async created(): Promise<void> {
        const query = gql`
            {
                familyById (id:${this.$route.params.family}) {
                    id
                    name
                    categories {
                        id
                        name
                    }
                }
            }
        `

        const { familyById } = await request(env.GRAPHQL_HOST, query)

        await equipmentModels.EquipmentFamily.insert({
            data: familyById
        })

        this.activeCategory = familyById.categories[0]?.id ?? null

        await this.getEquipmentsByActiveCategory()
    }

    onUpdateActiveCategory(activeCategory: number): void {
        this.activeCategory = activeCategory

        this.getEquipmentsByActiveCategory()
    }

    onChangePagination(value: number): void {
        this.setCurrentPage(value)

        this.getEquipmentsByActiveCategory()
    }

    async getEquipmentsByActiveCategory(): Promise<void> {
        const query = gql`
            {
                allEquipments(
                    category: ${this.activeCategory},
                    offset:${this.paginationOffset}
                    limit:${this.paginationLimit}
                ) {
                    totalCount
                    pageInfo {
                        hasNextPage
                        hasPreviousPage
                    }
                    results {
                        id
                        name
                        label
                        rating
                        promotion
                        description
                        brand {
                            id
                            name
                        }
                        category {
                            id
                        }
                    }
                }
            }
        `

        const { allEquipments } = await request(env.GRAPHQL_HOST, query)

        this.activeIds = allEquipments.results.map((item: any) => item.id)

        if (this.activeCategory) {
            await equipmentModels.EquipmentCategory.insertOrUpdate({
                data: {
                    id: this.activeCategory,
                    equipments: allEquipments.results,
                }
            })
        }

        this.pagination = {
            currentPage: 1,
            limit: this.pagination.limit,
            total: allEquipments.totalCount
        }
    }
}
</script>
