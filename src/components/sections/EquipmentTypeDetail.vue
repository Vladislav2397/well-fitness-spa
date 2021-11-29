<template lang="pug">

.equipment-type-detail
    banner-component
    tag-group-component(
        v-model="tags.active"
        :list="tags.list"
    )
    sort-component(
        v-model="filters.active"
        :list="filters.list"
    )
    tiling-layout-component._tiling(
        count-in-row="2"
    )
        template(
            #default="props"
        )
            card-product-component._card(
                v-for="item in productList"
                :class="props.classItem"
            )
                card-product-stats-component._content(
                    :has-show-room="true"
                    :price="['133000', '140000']"
                    quantity="3"
                    title="Беговая дорожка CardioPower S35"
                    rating="5"
                )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import TagGroup from '@/components/blanks/TagGroup.vue'
import Banner from '@/components/blanks/Banner.vue'
import Sort from '@/components/blanks/Sort.vue'
import TilingLayout from '@/components/layouts/TilingLayout.vue'
import CardProduct from '@/components/blanks/cards/CardProduct.vue'
import CardProductStats from '@/components/blanks/cards/CardProductStats.vue'

@Component({
    components: {
        'card-product-stats-component': CardProductStats,
        'card-product-component': CardProduct,
        'tiling-layout-component': TilingLayout,
        'sort-component': Sort,
        'tag-group-component': TagGroup,
        'banner-component': Banner,
    },
})
export default class EquipmentTypeDetail extends Vue {
    tags = {
        active: 0,
        list: [
            'Беговые дорожки',
            'Эллиптические',
            'Велотренажеры',
            'Степперы',
        ]
    }

    filters = {
        active: 0,
        list: [
            'По популярности',
            'По новизне',
            'По цене',
            'По рейтингу',
        ]
    }

    productList = [
        {
            quantity: 3,
            hasShowRoom: true,
            title: "Беговая дорожка CardioPower S35",
            rating: 5,
            price: ['133000', '140000'],
        },
        {
            quantity: 3,
            hasShowRoom: true,
            title: "Беговая дорожка CardioPower S35",
            rating: 5,
            price: ['133000', '140000'],
        },
        {
            quantity: 3,
            hasShowRoom: true,
            title: "Беговая дорожка CardioPower S35",
            rating: 5,
            price: ['133000', '140000'],
        },
        {
            quantity: 3,
            hasShowRoom: true,
            title: "Беговая дорожка CardioPower S35",
            rating: 5,
            price: ['133000', '140000'],
        },
        {
            quantity: 3,
            hasShowRoom: true,
            title: "Беговая дорожка CardioPower S35",
            rating: 5,
            price: ['133000', '140000'],
        },
    ]
}

</script>
