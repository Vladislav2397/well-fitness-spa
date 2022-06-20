<template lang="pug">

.page
    pagination-wrapper-component
        c-catalog(
            :activeCategory.sync="activeCategory"
        )

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import PaginationWrapper from '@/components/sections/PaginationWrapper.vue'
import { Catalog } from '@/pages/EquipmentFamily/Catalog'

import {equipmentModels} from '@/entities/equipment'
import {gql, request} from "graphql-request"
import {Maybe} from "@/types/common"

@Component({
    components: {
        'c-catalog': Catalog,
        'pagination-wrapper-component': PaginationWrapper,
    }
})
export default class EquipmentFamily extends Vue {
    activeCategory: Maybe<number> = null

    async created(): Promise<void> {
        const query = gql`
            {
                familyById (id:${this.$route.params.family}) {
                    id
                    name
                    categories {
                        id
                        name
                        equipments {
                            id
                            name
                            label
                            promotion
                            inStock
                            description
                        }
                    }
                }
            }
        `

        const { familyById } = await request('http://localhost:8000/graphql', query)

        await equipmentModels.EquipmentFamily.insert({
            data: familyById
        })

        this.activeCategory = familyById.categories[0]?.id ?? null
    }
}
</script>
