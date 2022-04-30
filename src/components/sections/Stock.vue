<template lang="pug">

.b-stock
    .__container.container
        section-wrapper-component(
            buttonText="Все товары по акции"
        )
            template(
                #title
            )
                tab-list-component.__tabs.scroll-row(
                    v-model="activeTabIndex"
                    :list="tabList"
                )
            .__cards
                card-product-component.__card(
                    v-for="card in cards"
                    :key="card.id"
                )
                    card-product-stats-component.__stats(
                        :quantity="card.quantity"
                        :hasShowRoom="card.hasShowRoom"
                        :title="card.title"
                        :rating="card.rating"
                        :price="card.price"
                        :is-price-row="device.size.mobile"
                    )
                        template(
                            #action
                        )
                            button-component(
                                v-if="!device.size.mobile"
                                :iconLeft="true"
                                icon="cart"
                            ) Купить

</template>

<script lang="ts">
import {Component, Inject, Vue} from 'vue-property-decorator'

import SectionWrapper from '@/components/blanks/SectionWrapper.vue'
import TabList from '@/components/blanks/TabList.vue'
import CardProduct from '@/components/blanks/cards/CardProduct.vue'
import CardProductStats from '@/components/blanks/cards/CardProductStats.vue'
import {IDevice} from '@/use/device'

export type ProductCardType = {
    id: number,
    image: {
        src: string,
        alt: string,
    },
    stickers?: Set<'new' | 'percent' | 'like'>,
    quantity: 0 | 1 | 2 | 3,
    hasShowRoom?: boolean,
    title: string,
    rating: 1 | 2 | 3 | 4 | 5,
    price: [current: string | number, old?: string | number]
}

@Component({
    components: {
        'card-product-stats-component': CardProductStats,
        'card-product-component': CardProduct,
        'tab-list-component': TabList,
        'section-wrapper-component': SectionWrapper
    },
})
export default class Stock extends Vue {
    @Inject('$device') device!: IDevice

    activeTabIndex = 0

    tabList = [
        'Акция',
        'Новинки',
        'Мы рекомендуем',
    ]

    cards: ProductCardType[] = [
        {
            id: 1,
            image: {
                src: '',
                alt: '',
            },
            stickers: new Set(['new', 'percent', 'like']),
            quantity: 3,
            hasShowRoom: true,
            title: 'Вертикальный велотренажер СardioPower B37',
            rating: 5,
            price: [1_128_000, 1_324_000]
        },
        {
            id: 2,
            image: {
                src: '',
                alt: '',
            },
            stickers: new Set(['new', 'percent']),
            quantity: 2,
            hasShowRoom: false,
            title: 'Вертикальный велотренажер СardioPower B37',
            rating: 4,
            price: [1_128_000, 1_324_000]
        },
        {
            id: 3,
            image: {
                src: '',
                alt: '',
            },
            stickers: new Set(['new']),
            quantity: 1,
            hasShowRoom: true,
            title: 'Вертикальный велотренажер СardioPower B37',
            rating: 3,
            price: [1_128_000, 1_324_000]
        },
        {
            id: 4,
            image: {
                src: '',
                alt: '',
            },
            quantity: 0,
            hasShowRoom: false,
            title: 'Вертикальный велотренажер СardioPower B37',
            rating: 2,
            price: [1_128_000, 1_324_000]
        },
        {
            id: 5,
            image: {
                src: '',
                alt: '',
            },
            stickers: new Set(['new']),
            quantity: 3,
            hasShowRoom: true,
            title: 'Вертикальный велотренажер СardioPower B37',
            rating: 1,
            price: [1_128_000, 1_324_000]
        }
    ]
}

</script>
