<template lang="pug">

.page
    page-breadcrumb-component(
        :list="breadcrumbList"
    )
    tiling-component(
        :count-in-row="currentCountItems"
    )
        template(
            #default="{ classItem }"
        )
            card-product-component(
                v-for="(product, index) in productList"
                :key="index"
                :class="classItem"
                :image-src="product.image[0]"
                :image-alt="product.image[1]"
            )
                product-counter-list-component(
                    :title="product.title"
                    :list="product.list"
                )
    idea-component
    stock-component

</template>

<script lang="ts">
import {Component, Inject, Vue} from 'vue-property-decorator'

import PageBreadcrumb, {
    breadcrumbListType
} from '@/components/blanks/PageBreadcrumb.vue'
import { Idea } from '@/pages/Main/sections/idea'
import Stock from '@/components/sections/Stock.vue'
import Tiling from '@/components/sections/Tiling.vue'
import CardProduct from '@/components/blanks/cards/CardProduct.vue'
import ProductCounterList from '@/components/blanks/ProductCounterList.vue'
import {IDevice} from '@/use/device'

@Component({
    components: {
        'product-counter-list-component': ProductCounterList,
        'card-product-component': CardProduct,
        'tiling-component': Tiling,
        'stock-component': Stock,
        'idea-component': Idea,
        'page-breadcrumb-component': PageBreadcrumb
    },
})
export default class EquipmentGroup extends Vue {
    @Inject('$device') device!: IDevice

    breadcrumbList: breadcrumbListType = [
        {
            text: 'Для фитнес клуба',
            href: '/equipment/gym'
        }
    ]

    created(): void {
        // this.equipmentModule.setCards('home')
    }

    get productList(): unknown {
        return [] // this.equipmentModule.list
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
