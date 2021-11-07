<template lang="pug">
include ../../tools/pug/mixins

+b.home-equipment
    +e.container.container
        +e.title Тренажеры для дома
        +e.VUE-GRID-COMPONENT.grid(
            :layout="layout"
        )
            +e.CARD-GRID-COMPONENT.card(
                v-for="(card, index) in cards"
                :key="index"
                :title="card.title"
                :imageSrc="card.image.src"
                :imageAlt="card.image.alt"
                theme="secondary"
                :stretch="currentStretch[index]"
            )
        +e.BUTTON-COMPONENT.button(
            theme="ghost-brand"
        ) Все категории
    
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'

import GridLayout from '@/components/blanks/GridLayout.vue'
import CardGrid from '@/components/blanks/cards/CardGrid.vue'
import VueGrid from '@/components/blanks/VueGrid.vue'

import Device from '@/mixins/device'

type cardType = {
    title: string
    href: string
    image: {
        src: string
        alt: string
    }
    stretch: 'horizontal' | 'vertical' | 'none' | 'default'
}

type Point = [x: number, y: number, sizeX: number, sizeY: number]

@Component({
    components: {
        'vue-grid-component': VueGrid,
        'card-grid-component': CardGrid,
        'grid-layout-component': GridLayout
    }
})
export default class HomeEquipmentPage extends Mixins(Device) {
    rowsMobile: Point[] = [
        [0, 0, 2, 1],
        [0, 1, 2, 1],
        [0, 2, 1, 1],
        [1, 2, 1, 1],
        [0, 3, 1, 1],
        [1, 3, 1, 1],
        [0, 4, 1, 1],
        [1, 4, 1, 1],
        [0, 5, 1, 1],
        [1, 5, 1, 1],
    ]

    rowsTablet: Point[] = [
        [0, 0, 1, 2],
        [1, 0, 1, 2],
        [2, 0, 1, 1],
        [2, 1, 1, 1],
        [0, 2, 1, 1],
        [1, 2, 1, 1],
        [2, 2, 1, 1],
        [0, 3, 1, 1],
        [1, 3, 1, 1],
        [2, 3, 1, 1],
    ]

    rowsDesktop: Point[] = [
        [0, 0, 1, 2],
        [1, 0, 1, 2],
        [2, 0, 1, 1],
        [3, 0, 1, 1],
        [2, 1, 1, 1],
        [3, 1, 1, 1],
        [0, 2, 1, 1],
        [1, 2, 1, 1],
        [2, 2, 1, 1],
        [3, 2, 1, 1],
    ]

    get layout (): Point[] {
        if (this.device.size.tabletLate) return this.rowsDesktop
        if (this.device.size.tablet) return this.rowsTablet
        if (this.device.size.mobile) return this.rowsMobile
        return this.rowsDesktop
    }

    get currentStretch (): cardType['stretch'][] {
        return [
            this.device.size.mobile ? 'horizontal' : 'vertical',
            this.device.size.mobile ? 'horizontal' : 'vertical',
            this.device.size.mobile ? 'default' : 'none',
            this.device.size.mobile ? 'default' : 'none',
            this.device.size.mobile ? 'default' : 'none',
            this.device.size.mobile ? 'default' : 'none',
            'default',
            'default',
            'default',
            'default',
        ]
    }

    cards: cardType[] = [
        {
            title: 'Беговые<br />дорожки',
            href: '#',
            image: {
                src: '',
                alt: '',
            },
            stretch: 'vertical',
        },
        {
            title: 'Эллиптические<br />тренажеры',
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
            title: 'Горнолыжные<br />тренажеры',
            href: '#',
            image: {
                src: '',
                alt: '',
            },
            stretch: 'none',
        },
        {
            title: 'Силовые<br />тренажеры',
            href: '#',
            image: {
                src: '',
                alt: '',
            },
            stretch: 'none',
        },
        {
            title: 'Гребные<br />тренажеры',
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
            stretch: 'default',
        },
        {
            title: 'Игровые<br />столы',
            href: '#',
            image: {
                src: '',
                alt: '',
            },
            stretch: 'default',
        },
        {
            title: 'Массажные<br />кресла',
            href: '#',
            image: {
                src: '',
                alt: '',
            },
            stretch: 'default',
        },
        {
            title: 'Фитнес<br />аксессуары',
            href: '#',
            image: {
                src: '',
                alt: '',
            },
            stretch: 'default',
        },
    ]

    correctStretch (stretch: cardType['stretch']): cardType['stretch'] {
        if (stretch === 'vertical') {
            if (this.device.size.mobile) {
                return 'horizontal'
            }
        }

        return stretch
    }

    currentQuarter (index: number): string {
        return `quarter${index + 1}`
    }
}

</script>
