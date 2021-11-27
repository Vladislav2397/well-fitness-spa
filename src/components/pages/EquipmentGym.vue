<template lang="pug">

.page
    page-breadcrumb-component(
        :list="breadcrumbList"
    )
    tiling-component(
        :count-in-row="currentCountItems"
    )
        template(
            #default="props"
        )
            card-product-component(
                v-for="product in productList"
                :class="props.classItem"
                :image-src="product.image.src"
                :image-alt="product.image.alt"
            )
                product-counter-list-component(
                    :title="product.title"
                    :list="product.list"
                )

    idea-component
    stock-component

</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'

import PageBreadcrumb, {
    breadcrumbListType
} from '@/components/blanks/PageBreadcrumb.vue'
import Idea from '@/components/sections/Idea.vue'
import Stock from '@/components/sections/Stock.vue'
import Tiling from '@/components/sections/Tiling.vue'
import CardProduct from '@/components/blanks/cards/CardProduct.vue'
import ProductCounterList from '@/components/blanks/ProductCounterList.vue'
import Device from '@/mixins/device'

@Component({
    components: {
        'product-counter-list-component': ProductCounterList,
        'card-product-component': CardProduct,
        'tiling-component': Tiling,
        'stock-component': Stock,
        'idea-component': Idea,
        'page-breadcrumb-component': PageBreadcrumb
    }
})
export default class EquipmentPage extends Mixins(Device) {
    breadcrumbList: breadcrumbListType = [
        {
            text: 'Для фитнес клуба',
            href: '/equipment/gym'
        }
    ]

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

    get currentCountItems(): 1 | 2 | 3 | 4 {
        if (this.device.size.mobile) return 1
        if (this.device.size.tablet && !this.device.size.tabletLate)
            return 2
        if (this.device.size.tabletLate) return 3
        return 4
    }
}
</script>
