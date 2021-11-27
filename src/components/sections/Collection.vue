<template lang="pug">

.collection
    ._container.container
        tiling-layout-component._tiling(
            :count-in-row="countInRow"
        )
            template(
                #default="slotProps"
            )
                card-product-component._card(
                    v-for="product in productList"
                    :class="slotProps.itemClass"
                    :image-src="product.image.src"
                    :image-alt="product.image.alt"
                )
                    product-counter-list-component._list(
                        :title="product.title"
                        :list="product.list"
                    )

</template>

<script lang="ts">
// TODO: Refactor this component (slots and wrappers)
import { Component, Prop, Vue } from 'vue-property-decorator'

import ProductCounterList from '@/components/blanks/ProductCounterList.vue'
import TilingLayout from '@/components/layouts/TilingLayout.vue'
import CardProduct from '@/components/blanks/cards/CardProduct.vue'

@Component({
    components: {
        'product-counter-list-component': ProductCounterList,
        'tiling-layout-component': TilingLayout,
        'card-product-component': CardProduct,
    },
})
export default class Collection extends Vue {
    @Prop() readonly quantity!: number
    @Prop() readonly countInRow!: number

    productList = [
        {
            image: {
                src: '',
                alt: '',
            },
            title: 'Кардиотренажеры',
            list: [
                {
                    text: 'Кардиотренажеры',
                    count: 57
                },
                {
                    text: 'Эллиптические тренажеры',
                    count: 2
                },
                {
                    text: 'Велотренажеры',
                    count: 2
                },
                {
                    text: 'Лестницы и степперы',
                    count: 2
                },
                {
                    text: 'Гребные тренажеры',
                    count: 2
                },
                {
                    text: 'Сайклинг',
                    count: 2
                },
            ]
        },
        {
            image: {
                src: '',
                alt: '',
            },
            title: 'Силовые тренажеры',
            list: [
                {
                    text: 'Грузоблочные',
                    count: 57
                },
                {
                    text: 'Нагружаемые дисками',
                    count: 2
                },
                {
                    text: 'Мультистанции',
                    count: 2
                },
                {
                    text: 'Рамы и комплексы',
                    count: 2
                },
                {
                    text: 'Скамьи, стойки',
                    count: 2
                },
            ]
        },
        {
            image: {
                src: '',
                alt: '',
            },
            title: 'Функциональный тренинг',
            list: [
                {
                    text: 'Комплексы для ФТ',
                    count: 57
                },
                {
                    text: 'Горнолыжные тренажеры',
                    count: 2
                },
                {
                    text: 'Slide&FIT',
                    count: 2
                },
                {
                    text: 'Рамы и комплексы',
                    count: 2
                },
                {
                    text: 'Скамьи, стойки',
                    count: 2
                },
            ]
        },
        {
            image: {
                src: '',
                alt: '',
            },
            title: 'Силовые тренажеры',
            list: [
                {
                    text: 'Грузоблочные',
                    count: 57
                },
                {
                    text: 'Нагружаемые дисками',
                    count: 2
                },
                {
                    text: 'Мультистанции',
                    count: 2
                },
                {
                    text: 'Рамы и комплексы',
                    count: 2
                },
            ]
        },
        {
            image: {
                src: '',
                alt: '',
            },
            title: 'Силовые тренажеры',
            list: [
                {
                    text: 'Грузоблочные',
                    count: 57
                },
                {
                    text: 'Нагружаемые дисками',
                    count: 2
                },
                {
                    text: 'Мультистанции',
                    count: 2
                },
            ]
        },
        {
            image: {
                src: '',
                alt: '',
            },
            title: 'Силовые тренажеры',
            list: [
                {
                    text: 'Бесконтактные гидромассажные ванны',
                    count: 57
                },
                {
                    text: 'Нагружаемые дисками',
                    count: 2
                },
                {
                    text: 'Мультистанции',
                    count: 2
                },
                {
                    text: 'Рамы и комплексы',
                    count: 2
                },
            ]
        },
        {
            image: {
                src: '',
                alt: '',
            },
            title: 'Силовые тренажеры',
            list: [
                {
                    text: 'Грузоблочные',
                    count: 57
                },
                {
                    text: 'Нагружаемые дисками',
                    count: 2
                },
                {
                    text: 'Мультистанции',
                    count: 2
                },
            ]
        },
        {
            image: {
                src: '',
                alt: '',
            },
            title: 'Силовые тренажеры',
            list: [
                {
                    text: 'Грузоблочные',
                    count: 57
                },
            ]
        },
        {
            image: {
                src: '',
                alt: '',
            },
            title: 'Силовые тренажеры',
            list: []
        },
    ]
}

</script>
