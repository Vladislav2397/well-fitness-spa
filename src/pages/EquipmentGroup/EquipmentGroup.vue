<template lang="pug">

.b-equipment-group
    tiling-component(
        :count-in-row="currentCountItems"
    )
        template(
            #default="{ classItem }"
        )
            c-equipment-family-card(
                v-for="id in productList"
                :key="id"
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
import { EquipmentGroup, EquipmentFamily } from '@/entities/equipment'

import {gql, request} from "graphql-request"
import {env} from "@/shared/config"
import {Model} from "@/shared/config/decorators"
import {Repository} from "@vuex-orm/core"

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
export default class EquipmentGroupPage extends Vue {
    @Inject('$device') device!: IDevice

    @Model(EquipmentGroup) EquipmentGroup!: Repository<EquipmentGroup>
    @Model(EquipmentFamily) EquipmentFamily!: Repository<EquipmentFamily>

    async created(): Promise<void> {
        try {
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

            console.log(groups)

            this.EquipmentGroup.save(groups)
        } catch (error) {
            console.log('error')
        }
    }

    get productList() {
        const families = this.EquipmentFamily
            .query()
            .with('categories')
            .all()

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
