<template lang="pug">

.page
    pagination-wrapper-component(
        :value="currentPage"
        :quantity="paginationQuantity"

        @input="onChangePagination"
        @clickLink="onClickLink"
    )
        c-catalog(
            :activeCategory="activeCategory"
            :activeIds="activeIds"
            :filters="filters"

            @update:activeCategory="onUpdateActiveCategory"
        )

</template>

<script lang="ts">
import {Component, Mixins} from 'vue-property-decorator'

import {PaginationWrapper} from '@/shared/ui/PaginationWrapper'
import {Catalog, FilterGroups} from './Catalog'
import PaginationMixin from "@/shared/mixins/PaginationMixin"

import {EquipmentCategory, EquipmentFamily} from '@/entities/equipment'
import {gql, request} from "graphql-request"
import {Maybe} from "@/types/common"
import {env} from "@/shared/config"
import {Brand} from "@/entities/brand"
import {Model} from "@/shared/config/decorators"
import {Repository} from "@vuex-orm/core"

// TODO: add middleware for filtering into currentRoute

@Component({
    components: {
        'c-catalog': Catalog,
        'pagination-wrapper-component': PaginationWrapper,
    }
})
export default class EquipmentFamilyPage extends Mixins(PaginationMixin) {
    @Model(EquipmentFamily) EquipmentFamily!: Repository<EquipmentFamily>
    @Model(EquipmentCategory) EquipmentCategory!: Repository<EquipmentCategory>
    @Model(Brand) Brand!: Repository<Brand>

    activeCategory: Maybe<number> = null

    activeIds: number[] = []

    onClickLink() {
        const { limit } = this.pagination

        if (limit === 10) {
            this.pagination.limit = 15
        } else if (limit === 15) {
            this.pagination.limit = 25
        }

        this.getEquipmentsByActiveCategory()
    }

    createFilter(filterName: string): Set<string> {
        return new Set(this.$route.query?.[filterName]?.split(',') ?? [])
    }

    get filters() {
        return {
            [FilterGroups.BRAND]: this.createFilter('brand'),
            [FilterGroups.FUNCTIONALITY]: this.createFilter('functionality'),
            [FilterGroups.PROMOTION]: this.createFilter('promotion'),
        }
    }

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
                brands {
                    id
                    name
                }
            }
        `

        const { familyById, brands } = await request(env.GRAPHQL_HOST, query)

        this.EquipmentFamily.save(familyById)
        this.Brand.save(brands)

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
                    brand: [${[...this.filters[FilterGroups.BRAND]].map(id => `"${id}"`)}],
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
            this.EquipmentCategory.save({
                id: this.activeCategory,
                equipments: allEquipments.results
            })
        }

        this.pagination = {
            currentPage: this.pagination.currentPage,
            limit: this.pagination.limit,
            total: allEquipments.totalCount
        }
    }
}
</script>
