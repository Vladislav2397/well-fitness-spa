<template lang="pug">
include ../../tools/pug/mixins

+b.home-equipment
    +e.title
    +e.grid
        card-grid-component(
            v-for="(card, index) in cards"
            :key="index"
            :title="card.title"
            :imageSrc="card.image.src"
            :imageAlt="card.image.alt"
            theme="secondary"
            :stretch="card.stretch"
        )
    +e.button
    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import GridLayout from '@/components/blanks/GridLayout.vue'
import CardGrid from '@/components/blanks/cards/CardGrid.vue'

type cardType = {
    title: string
    href: string
    image: {
        src: string
        alt: string
    }
    stretch: 'horizontal' | 'vertical' | 'none'
}

@Component({
    components: {
        'card-grid-component': CardGrid,
        'grid-layout-component': GridLayout
    }
})
export default class HomeEquipmentPage extends Vue {
    cards: cardType[] = [
        {
            title: 'Беговые дорожки',
            href: '#',
            image: {
                src: '',
                alt: '',
            },
            stretch: 'vertical',
        },
        {
            title: 'Эллиптические тренажеры',
            href: '#',
            image: {
                src: '',
                alt: '',
            },
            stretch: 'vertical',
        },
        {
            title: 'Велотренажеры',
            href: '#',
            image: {
                src: '',
                alt: '',
            },
            stretch: 'none',
        },
        {
            title: 'Горнолыжные тренажеры',
            href: '#',
            image: {
                src: '',
                alt: '',
            },
            stretch: 'none',
        },
        {
            title: 'Силовые тренажеры',
            href: '#',
            image: {
                src: '',
                alt: '',
            },
            stretch: 'none',
        },
        {
            title: 'Гребные тренажеры',
            href: '#',
            image: {
                src: '',
                alt: '',
            },
            stretch: 'none',
        },
        {
            title: 'Батуты',
            href: '#',
            image: {
                src: '',
                alt: '',
            },
            stretch: 'none',
        },
        {
            title: 'Игровые столы',
            href: '#',
            image: {
                src: '',
                alt: '',
            },
            stretch: 'none',
        },
        {
            title: 'Массажные кресла',
            href: '#',
            image: {
                src: '',
                alt: '',
            },
            stretch: 'none',
        },
        {
            title: 'Фитнес аксессуары',
            href: '#',
            image: {
                src: '',
                alt: '',
            },
            stretch: 'none',
        },
    ]
}

</script>
