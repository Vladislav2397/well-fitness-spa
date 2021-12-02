<template lang="pug">

.equipment-type-detail
    banner-component._banner
    tag-group-component(
        v-model="tags.active"
        :list="tags.list"
    )
    sort-component(
        v-model="filters.active"
        :list="filters.list"
    )
    catalog-layout-component
        template(
            #default
        )
            tiling-layout-component._tiling(
                :count-in-row="rowCount"
            )
                template(
                    #default="props"
                )
                    card-product-component._card(
                        v-for="(item, index) in productList"
                        :key="index"
                        :class="props.classItem"
                    )
                        card-product-stats-component._content(
                            :has-show-room="true"
                            :price="item.price"
                            :quantity="item.quantity"
                            :title="item.title"
                            :rating="item.rating"
                            :info="device.size.desktop && item.info"
                            :is-rating-label="!device.size.mobile"
                            :is-price-row="device.size.tablet"
                        )
        template(
            #aside
        )
            ._aside

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import TagGroup from '@/components/blanks/TagGroup.vue'
import Banner from '@/components/blanks/Banner.vue'
import Sort from '@/components/blanks/Sort.vue'
import TilingLayout from '@/components/layouts/TilingLayout.vue'
import CardProduct from '@/components/blanks/cards/CardProduct.vue'
import CardProductStats from '@/components/blanks/cards/CardProductStats.vue'
import Device from '@/mixins/device'
import CatalogLayout from '@/components/layouts/CatalogLayout.vue'

@Component({
    components: {
        'catalog-layout-component': CatalogLayout,
        'card-product-stats-component': CardProductStats,
        'card-product-component': CardProduct,
        'tiling-layout-component': TilingLayout,
        'sort-component': Sort,
        'tag-group-component': TagGroup,
        'banner-component': Banner,
    },
})
export default class EquipmentTypeDetail extends (Device) {
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
            price: [133000, 140000],
            info: [
                ['Тип дорожки', 'Домашняя'],
                ['Бег.полотно', '1200 х 450 мм'],
                ['Мощность двигателя', '2,0 л.с.'],
                ['Беговое полотно', '2-х слойное'],
                ['Производитель', 'Cardio Power'],
            ]
        },
        {
            quantity: 3,
            hasShowRoom: true,
            title: "Беговая дорожка CardioPower S35",
            rating: 5,
            price: [133000, 140000],
            info: [
                ['Тип дорожки', 'Домашняя'],
                ['Бег.полотно', '1200 х 450 мм'],
                ['Мощность двигателя', '2,0 л.с.'],
                ['Беговое полотно', '2-х слойное'],
                ['Производитель', 'Cardio Power'],
            ]
        },
        {
            quantity: 3,
            hasShowRoom: true,
            title: "Беговая дорожка CardioPower S35",
            rating: 5,
            price: [133000, 140000],
            info: [
                ['Тип дорожки', 'Домашняя'],
                ['Бег.полотно', '1200 х 450 мм'],
                ['Мощность двигателя', '2,0 л.с.'],
                ['Беговое полотно', '2-х слойное'],
                ['Производитель', 'Cardio Power'],
            ]
        },
        {
            quantity: 3,
            hasShowRoom: true,
            title: "Беговая дорожка CardioPower S35",
            rating: 5,
            price: [133000, 140000],
            info: [
                ['Тип дорожки', 'Домашняя'],
                ['Бег.полотно', '1200 х 450 мм'],
                ['Мощность двигателя', '2,0 л.с.'],
                ['Беговое полотно', '2-х слойное'],
                ['Производитель', 'Cardio Power'],
            ]
        },
        {
            quantity: 3,
            hasShowRoom: true,
            title: "Беговая дорожка CardioPower S35",
            rating: 5,
            price: [133000, 140000],
            info: [
                ['Тип дорожки', 'Домашняя'],
                ['Бег.полотно', '1200 х 450 мм'],
                ['Мощность двигателя', '2,0 л.с.'],
                ['Беговое полотно', '2-х слойное'],
                ['Производитель', 'Cardio Power'],
            ]
        },
    ]

    get rowCount(): number {
        if (this.device.size.mobile) return 2
        else if (this.device.size.tablet) return 3
        else return 4
    }
}

</script>
