<template lang="pug">

.b-equipment-group
    tiling-component(
        :count-in-row="currentCountItems"
    )
        template(
            #default="{ classItem }"
        )
            c-equipment-family-card(
                v-for="(id, index) in productList"
                :key="index"
                :class="classItem"
                :id="id"
            )
    c-idea
    c-stock

</template>

<script lang="ts">
import {Component, Inject, Vue} from 'vue-property-decorator'

import { Idea } from '@/pages/Main/sections/idea'
import Stock from '@/components/sections/Stock.vue'
import { Tiling } from '@/shared/layouts/Tiling'
import CardProduct from '@/components/blanks/cards/CardProduct.vue'
import ProductCounterList from '@/components/blanks/ProductCounterList.vue'
import type { IDevice } from '@/use/device'
import EquipmentFamilyCard
    from '@/entities/equipment/ui/EquipmentFamilyCard/EquipmentFamilyCard.vue'
import { equipmentModels } from '@/entities/equipment'

import {gql, request} from "graphql-request"
import {env} from "@/shared/config"

@Component({
    components: {
        'c-equipment-family-card': EquipmentFamilyCard,
        'product-counter-list-component': ProductCounterList,
        'card-product-component': CardProduct,
        'tiling-component': Tiling,
        'c-stock': Stock,
        'c-idea': Idea,
    },
})
export default class EquipmentGroup extends Vue {
    @Inject('$device') device!: IDevice

    // @Service('EquipmentGroup') equipmentGroupService!: EquipmentGroupService

    async created(): Promise<void> {
        const query = gql`
            {
                groups {
                    id
                    name
                    families {
                        id
                        name
                        categories {
                            id
                            name
                            count
                        }
                    }
                }
            }
        `

        const { groups } = await request(env.GRAPHQL_HOST, query)

        this.EquipmentGroup.insert(groups)

    //     await equipmentModels.EquipmentGroup.insert({
    //         data: groups
    //     })
    }

    get EquipmentGroup() {
        return this.$store.$repo(equipmentModels.EquipmentGroup)
    }

    get productList() {
        const families = this.EquipmentGroup
            .query()
            .with('categories')
            .get()

        // @ts-ignore
        return Object.values(families ?? {}).map(family => +family.id)
    }

    get currentCountItems(): 1 | 2 | 3 | 4 {
        if (this.device.size.mobile) return 1
        if (this.device.size.tablet && !this.device.size.tabletLate)
            return 2
        if (this.device.size.tabletLate) return 3
        return 4
    }
}
</script>
