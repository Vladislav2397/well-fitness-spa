<template lang="pug">

.b-equipment-group
    h1 Equipment Group
    page-breadcrumb-component(
        :list="breadcrumbList"
    )
    tiling-component(
        :count-in-row="currentCountItems"
    )
        template(
            #default="{ classItem }"
        )
            c-equipment-family-card(
                v-for="(product, index) in productList"
                :key="index"
                :class="classItem"
                :equipmentFamily="product"
            )
    c-idea
    c-stock

</template>

<script lang="ts">
import {Component, Inject, Vue} from 'vue-property-decorator'

import PageBreadcrumb, {
    breadcrumbListType
} from '@/components/blanks/PageBreadcrumb.vue'
import { Idea } from '@/pages/Main/sections/idea'
import Stock from '@/components/sections/Stock.vue'
import { Tiling } from '@/shared/layouts/Tiling'
import CardProduct from '@/components/blanks/cards/CardProduct.vue'
import ProductCounterList from '@/components/blanks/ProductCounterList.vue'
import {IDevice} from '@/use/device'
import EquipmentFamilyCard
    from '@/entities/equipment/ui/EquipmentFamilyCard/EquipmentFamilyCard.vue'
import { EquipmentGroupService } from '@/services/equipmentGroup'

import { Action, Getter, Service } from '@/shared/config'

import '@/services/equipmentGroup'

@Component({
    components: {
        'c-equipment-family-card': EquipmentFamilyCard,
        'product-counter-list-component': ProductCounterList,
        'card-product-component': CardProduct,
        'tiling-component': Tiling,
        'c-stock': Stock,
        'c-idea': Idea,
        'page-breadcrumb-component': PageBreadcrumb
    },
})
export default class EquipmentGroup extends Vue {
    @Inject('$device') device!: IDevice

    // @Getter('equipment/families') families!: any
    // @Getter('equipment/categories') categories!: any

    // @Action('equipment/setEquipmentFamilies') setEquipmentFamilies!: any
    // @Action('equipment/setEquipmentCategories') setEquipmentCategories!: any

    @Service('EquipmentGroup') equipmentGroupService!: EquipmentGroupService

    breadcrumbList: breadcrumbListType = [
        {
            text: 'Для фитнес клуба',
            href: '/equipment/gym'
        }
    ]

    async created(): Promise<void> {
        await this.equipmentGroupService.initialize()
    }

    get productList(): EquipmentFamilyCard['equipmentFamily'][] {
        return Object.values(this.families).map(family => ({
            id: family.id,
            image: family.image,
            title: family.name,
            list: family.categories.map(id => {
                return [
                    this.categories[id].name,
                    this.categories[id].count,
                ]
            })
        }))
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
