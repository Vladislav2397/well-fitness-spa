<template lang="pug">

.equipment-type-detail
    banner-component._banner
    link-component._link(
        v-if="device.size.mobile"
        :iconLeft="true"
        icon="filter"
        theme="dark"
        @click="isModal = true"
    ) Фильтры
    tag-group-component._tags(
        v-model="tags.active"
        :list="tags.list"
    )
    sort-component._sort(
        v-if="!device.size.mobile"
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
                    #default="{ classItem }"
                )
                    card-product-component._card(
                        v-for="(item, index) in productList"
                        :key="index"
                        :class="classItem"
                    )
                        card-product-stats-component._content(
                            :has-show-room="true"
                            :price="item.price"
                            :quantity="item.quantity"
                            :title="item.title"
                            :rating="item.rating"
                            :info="device.size.desktop ? item.info : []"
                            :is-rating-label="!device.size.mobile"
                            :is-price-row="device.size.tablet"
                        )
        template(
            #aside="{ classContainer }"
        )
            ._aside(
                v-if="!device.size.mobile"
                :class="classContainer"
            )
                filter-group-component._group(
                    v-for="({ title, filters }, index) in filterList"
                    :key="index"
                    :title="title"
                )
                    template(
                        #default="{ classItem }"
                    )
                        checkbox-component(
                            v-for="([name, value], index) in filters"
                            :key="index"
                            v-model="value"
                            :id="`input${index}${name}`"
                            :class="classItem"
                        ) {{ name }}
                filter-group-component._group(
                    title="Цена"
                )
                    range-component(
                        :range="[2000, 10000]"
                    )
                filter-group-component._group
                    button-component(
                        theme="ghost-brand"
                    ) Очистить
    filter-modal-component(
        v-if="device.size.mobile && isModal"

        @close="onCloseModal"
    )

</template>

<script lang="ts">
import {Component, Inject, Mixins, Vue} from 'vue-property-decorator'

import TagGroup from '@/components/blanks/TagGroup.vue'
import Banner from '@/components/blanks/Banner.vue'
import Sort from '@/components/blanks/Sort.vue'
import TilingLayout from '@/components/layouts/TilingLayout.vue'
import CardProduct from '@/components/blanks/cards/CardProduct.vue'
import CardProductStats from '@/components/blanks/cards/CardProductStats.vue'
import CatalogLayout from '@/components/layouts/CatalogLayout.vue'
import Modal from '@/components/modals/Modal.vue'
import FilterModal from '@/components/modals/FilterModal.vue'
import FilterGroup from '@/components/blanks/FilterGroup.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Range from '@/components/ui/Range.vue'

import { IDevice } from '@/use/device'

@Component({
    components: {
        'range-component': Range,
        'checkbox-component': Checkbox,
        'filter-group-component': FilterGroup,
        'filter-modal-component': FilterModal,
        'modal-component': Modal,
        'catalog-layout-component': CatalogLayout,
        'card-product-stats-component': CardProductStats,
        'card-product-component': CardProduct,
        'tiling-layout-component': TilingLayout,
        'sort-component': Sort,
        'tag-group-component': TagGroup,
        'banner-component': Banner,
    },
})
export default class EquipmentTypeDetail extends Vue {
    @Inject('$device') device!: IDevice

    isModal = false

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

    filterList = [
        {
            title: 'Производители',
            theme: 'light',
            filters: [
                ['Gym80', false],
                ['CardioPower', true],
                ['Original Fitness', false],
                ['Nautilus', true],
                ['Sole Fitness', true],
                ['Nautilus', false],
            ]
        },
        {
            title: 'Функциональность',
            theme: 'light',
            filters: [
                ['Самые продвинутые', false],
                ['Компактные', false],
                ['С моб. приложением', false],
            ]
        },
        {
            title: 'Акции, наличие',
            theme: 'light',
            filters: [
                ['Акция', false],
                ['Новинки', false],
                ['В наличии', false],
                ['Наш выбор', false],
            ]
        },
    ]

    get rowCount(): number {
        if (this.device.size.desktop) return 4
        if (this.device.size.tabletLate) return 3
        return 2
    }

    onCloseModal(): void {
        this.isModal = false
    }
}

</script>
