<template lang="pug">

section.blog
    ._container.container
        section-wrapper-component._wrapper(
            buttonText="Все новости"
        )
            template(
                v-slot:title
            )
                tab-list-component._tabs.scroll-row(
                    v-model="activeTabIndex"
                    :list="tabList"
                )
            template
                ._list.scroll-row
                    card-blog-component._item(
                        v-for="card in cardList"
                        :key="card.id"
                        :imageSrc="card.image.src"
                        :imageAlt="card.image.alt"
                        :title="card.title"
                        :description="card.description"
                        :date="card.date"
                    )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import SectionWrapper from '@/components/blanks/SectionWrapper.vue'
import TabList from '@/components/blanks/TabList.vue'
import CardBlog from '@/components/blanks/cards/CardBlog.vue'

@Component({
    components: {
        'section-wrapper-component': SectionWrapper,
        'tab-list-component': TabList,
        'card-blog-component': CardBlog,
    }
})
export default class Blog extends Vue {
    activeTabIndex = 0

    tabList = [
        'Новости',
        'Блог',
    ]

    cardList = [
        {
            id: 1,
            image: {
                src: '',
                alt: '',
            },
            title: 'В продажу поступили тренажеры Nautilus',
            description: 'Представляем тренажеры Nautilus 626 серии.',
            date: '12.09.2021',
        },
        {
            id: 2,
            image: {
                src: '',
                alt: '',
            },
            title: 'В продажу поступили тренажеры Nautilus',
            description: 'Представляем тренажеры Nautilus 626 серии.',
            date: '12.09.2021',
        },
        {
            id: 3,
            image: {
                src: '',
                alt: '',
            },
            title: 'В продажу поступили тренажеры Nautilus',
            description: 'Представляем тренажеры Nautilus 626 серии.',
            date: '12.09.2021',
        },
        {
            id: 4,
            image: {
                src: '',
                alt: '',
            },
            title: 'В продажу поступили тренажеры Nautilus',
            description: 'Представляем тренажеры Nautilus 626 серии.',
            date: '12.09.2021',
        },
    ]
}

</script>
