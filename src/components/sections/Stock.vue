<template lang="pug">
include ../../tools/pug/mixins

+b.stock
    +e.container.container
        section-wrapper-component(
            buttonText="Все товары по акции"
        )
            template(
                #title
            )
                +e.TAB-LIST-COMPONENT.tabs(
                    v-model="activeTabIndex"
                    :list="tabList"
                )
            +e.cards
                +e.CARD-PRODUCT-COMPONENT.card(
                    v-for="card in cards"
                    :key="card.id"
                )
                    card-product-stats-component(
                        :quantity="card.quantity"
                        :hasShowRoom="card.hasShowRoom"
                        :title="card.title"
                        :rating="card.rating"
                        :price="card.price"
                    )
                        template(
                            #action
                        )
                            button-component(
                                :iconLeft="true"
                                icon="cart"
                            ) Добавить

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

import SectionWrapper from '@/components/blanks/SectionWrapper.vue'
import TabList from '@/components/blanks/TabList.vue'
import CardProduct from '@/components/blanks/cards/CardProduct.vue'
import CardProductStats from '@/components/blanks/cards/CardProductStats.vue'

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
    price: [current: number, old?: number]
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
