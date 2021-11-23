<template lang="pug">

.search-content
    input-component._input(
        v-model="searchField"
        theme="transparent"
        placeholder="Поиск"
    )
        template(
            #prefix
        )
            i.icon.-size-m.-search
    searched-items-component._item(
        :tag-list="['Для дома', 'Для фитнес клуба']"
        label="53 товара"
        list-classes="scroll-row"
    )
        card-product-component._card(
            v-for="({title, price, rating}, index) in cards"
            :key="index"
        )
            card-product-stats-component(
                :title="title"
                :price="price"
                :rating="rating"
            )
    searched-items-component._item(
        label="12 статей"
    )
        ._link
            span Название статьи #[a(href="/") Велотренажеры] из раздела #[a(href="/") Блог]
        ._link
            span Название статьи #[a(href="/") Домашние велотренажеры] из раздела #[a(href="/") Новости]
    ._item
        button-component._button(
        ) Показать все результаты

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import Input from '@/components/ui/Input.vue'
import SearchedItems from '@/components/blanks/SearchedItems.vue'
import CardProduct from '@/components/blanks/cards/CardProduct.vue'
import CardProductStats from '@/components/blanks/cards/CardProductStats.vue'

@Component({
    components: {
        'card-product-stats-component': CardProductStats,
        'card-product-component': CardProduct,
        'searched-items-component': SearchedItems,
        'input-component': Input,
    },
})
export default class SearchContent extends Vue {
    searchField = ''

    cards = [
        {
            title: 'Беговая дорожка',
            price: [3294382],
            rating: 1
        },
        {
            title: 'Беговая дорожка',
            price: [32932],
            rating: 3
        },
        {
            title: 'Беговая дорожка',
            price: [394382],
            rating: 2
        },
        {
            title: 'Беговая дорожка',
            price: [3244382],
            rating: 5
        },
    ]
}

</script>
