<template lang="pug">

.equipment-preview
    ._container.container
        row-layout._row
            template(
                #default="{ classItem }"
            )
                link-component._tab(
                    v-for="[id, name] in tabs"
                    :key="id"
                    :theme="id === activeIndex ? 'primary' : 'secondary'"
                    :class="classItem"
                    @click="onLinkClick(id)"
                ) {{ name }}
        ._downloads
            link-component(
                :iconLeft="true"
                tag="span"
                icon="empty-file"
            ) Скачать инструкцию
            link-component(
                :iconLeft="true"
                tag="span"
                icon="list-file"
            ) Скачать каталог
    post-component._ad(
        :image="ad.image"
    )
        template(
            #default="{classContent}"
        )
            .text(
                :class="classContent"
            ) {{ ad.content }}
            link-component._video-link(
                :iconLeft="true"
                icon="play"
            ) Видео о товаре
    post-component._post(
        v-for="{ id, image, title, content } in posts"
        :key="id"
        :image="image"
    )
        template(
            #default="{ classContent }"
        )
            .text(
                :class="classContent"
            )
                | {{ title }}<br />{{ content }}
    ._lightbox
    ._container.container
        section-wrapper-component(
            title="Характеристики"
            button-text="Все характеристики"
        )
            peculiarity-component._peculiarity(
                v-for="({ title, list }, index) in peculiarities"
                :list="list"
                :is-active="index === 0"
            )
                template(
                    #title
                )
                    p {{ title }}
                        i.icon.-size-m.icon--collapse
        section-wrapper-component(
            title="Отзывы"
            button-text="Все отзывы"
        )
            review-quantity-component(
                :reviews="[23, 5, 17, 4, 2]"
            )
            review-component(
                :rating="[]"
                user=""
                text=""
                is-collapsed=""
            )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import TabGroup from '@/components/blanks/TabGroup.vue'
import RowLayout from '@/components/layouts/RowLayout.vue'
import Post from '@/components/blanks/Post.vue'
import Peculiarity from '@/components/ui/Peculiarity.vue'
import { SectionWrapper } from '@/pages/Main/sections/SectionWrapper'
import ReviewQuantity from '@/components/blanks/ReviewQuantity.vue'
import Review from '@/components/blanks/Review.vue'

import { ReviewModel } from '@/components/blanks/Review.vue'

@Component({
    components: {
        'review-component': Review,
        'review-quantity-component': ReviewQuantity,
        'section-wrapper-component': SectionWrapper,
        'peculiarity-component': Peculiarity,
        'post-component': Post,
        'row-layout': RowLayout,
        'tab-group-component': TabGroup,
    }
})
export default class EquipmentPreview extends Vue {
    tabs: [
        id: number,
        value: string
    ][] = [
        [1, 'Описание'],
        [2, 'Характеристики'],
        [3, 'Описание'],
        [4, 'Характеристики'],
        [5, 'Описание'],
    ]

    ad = {
        image: [],
        content: 'Беговые дорожки Bowflex Results Series ™ это самые совершенные технологии, высочайшее качество и полноценная синхронизация данных.',
        theme: 'dark',
    }

    posts = [
        {
            id: 1,
            image: [],
            title: 'Заголовок',
            content: 'Беговая дорожка Bowlfex BXT128 – это одна из самых технологичных моделей для максимально эффективных и комфортных тренировок.\nНадежный двигатель мощностью 3.5 л.с. раскручивает полотно до 19.3 км/ч, а максимальный угол наклона в 15% позволяет разнообразить тренировки и имитировать условия интенсивногоподъема для любителей бега по пересеченной местности.\nБеговая дорожка Bowlfex BXT128 оснащена высокопрочным 3-х слойным полотном размером 51x152 см и инновационной системой амортизации Comfort Tech 3 Теперь каждый шаг идеально сглаживается, создавая ощущения пробежки на профессиональном покрытии!',
        },
        {
            id: 2,
            image: [],
            title: 'Заголовок',
            content: 'Беговая дорожка Bowlfex BXT128 – это одна из самых технологичных моделей для максимально эффективных и комфортных тренировок.\nНадежный двигатель мощностью 3.5 л.с. раскручивает полотно до 19.3 км/ч, а максимальный угол наклона в 15% позволяет разнообразить тренировки и имитировать условия интенсивногоподъема для любителей бега по пересеченной местности.\nБеговая дорожка Bowlfex BXT128 оснащена высокопрочным 3-х слойным полотном размером 51x152 см и инновационной системой амортизации Comfort Tech 3 Теперь каждый шаг идеально сглаживается, создавая ощущения пробежки на профессиональном покрытии!',
        }
    ]

    peculiarities = [
        {
            title: 'Основные характеристики',
            list: [
                ['key', 'value'],
                ['key', 'value'],
                ['key', 'value'],
                ['key', 'value'],
            ],
        },
        {
            title: 'Характеристики',
            list: [
                ['key', 'value'],
                ['key', 'value'],
                ['key', 'value'],
                ['key', 'value'],
            ],
        }
    ]

    reviews: ReviewModel[] = [
        {
            user: {
                avatar: 'null',
                name: 'John Snow',
                date: '11 декабря 2020',
            },
            rating: [14, 32, 42, 32, 2],
            text: 'Some content of review. Maybe lorem ipsum',
        },
        {
            user: {
                avatar: '',
                name: '',
                date: '',
            },
            rating: [20, 11, 0, 5, 2],
            text: 'Some content of review. Maybe lorem ipsum',
        }
    ]

    activeIndex: number | null = null

    mounted() {
        this.activeIndex = this.tabs[0][0]
    }

    onLinkClick(id: number) {
        this.activeIndex = id
    }
}

</script>
