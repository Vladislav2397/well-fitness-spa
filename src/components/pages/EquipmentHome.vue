<template lang="pug">

equipment-layout-component.page(
    :breadcrumb-list="breadcrumbList"
)
    collection-component
        tiling-layout-component
            template(
                #default="slotProps"
            )
                card-product-component(
                    v-for="(product, index) in productList"
                    :key="index"
                    :class="slotProps.itemClass"
                )


</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import EquipmentLayout from '@/components/layouts/EquipmentLayout.vue'

import { breadcrumbListType } from '@/components/blanks/PageBreadcrumb.vue'
import Collection from '@/components/sections/Collection.vue'
import CardProduct from '@/components/blanks/cards/CardProduct.vue'
import TilingLayout from '@/components/layouts/TilingLayout.vue'

@Component({
    components: {
        'tiling-layout-component': TilingLayout,
        'card-product-component': CardProduct,
        'collection-component': Collection,
        'equipment-layout-component': EquipmentLayout,
    }
})
export default class EquipmentPage extends Vue {
    breadcrumbList: breadcrumbListType = [
        {
            text: 'Для дома',
            href: '/equipment/home'
        }
    ]

    productList = [
        {
            image: {
                src: '',
                alt: '',
            },
        }
    ]
}
</script>
