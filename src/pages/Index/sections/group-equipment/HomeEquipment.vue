<template lang="pug">

.home-equipment
    ._container.container
        grid-section-component._grid(
            title="Тренажеры для дома"
            button="Все категории"
            :layout="layout"
            :cardList="cardList"
            @click="onClick"
        )

</template>

<script lang="ts">
import {Component, Inject, Vue} from 'vue-property-decorator'

import GridLayout from '@/components/blanks/GridLayout.vue'
import CardGrid from '@/components/blanks/cards/CardGrid.vue'
import VueGrid, {Point} from '@/components/blanks/VueGrid.vue'

import GridSection, {cardType} from '@/components/blanks/GridSection.vue'

import {IDevice} from '@/use/device'
import {RouteNames} from '@/router/helpers'

export type onHomeEquipmentCreatedHook = () => void

@Component({
    components: {
        'vue-grid-component': VueGrid,
        'card-grid-component': CardGrid,
        'grid-layout-component': GridLayout,
        'grid-section-component': GridSection,
    }
})
export default class HomeEquipmentPage extends Vue {
    @Inject('$device') device!: IDevice

    layoutMobile: Point[] = [
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

    layoutTablet: Point[] = [
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

    layoutDesktop: Point[] = [
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
        if (this.device.size.tabletLate) return this.layoutDesktop
        if (this.device.size.tablet) return this.layoutTablet
        if (this.device.size.mobile) return this.layoutMobile
        return this.layoutDesktop
    }

    get cardList (): cardType[] {
        return [
            {
                title: 'Беговые<br />дорожки',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'dark',
                stretch: this.device.size.mobile ? 'horizontal' : 'vertical',
            },
            {
                title: 'Эллиптические<br />тренажеры',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'secondary',
                stretch: this.device.size.mobile ? 'horizontal' : 'vertical',
            },
            {
                title: 'Велотренажеры',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'light',
                stretch: this.device.size.tablet || this.device.size.desktop ? 'none' : 'default',
            },
            {
                title: 'Горнолыжные<br />тренажеры',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'light',
                stretch: this.device.size.tablet || this.device.size.desktop ? 'none' : 'default',
            },
            {
                title: 'Силовые<br />тренажеры',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'light',
                stretch: 'none',
            },
            {
                title: 'Гребные<br />тренажеры',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'light',
                stretch: 'none',
            },
            {
                title: 'Батуты',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'light',
                stretch: 'default',
            },
            {
                title: 'Игровые<br />столы',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'light',
                stretch: 'default',
            },
            {
                title: 'Массажные<br />кресла',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'light',
                stretch: 'default',
            },
            {
                title: 'Фитнес<br />аксессуары',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'light',
                stretch: 'default',
            },
        ]
    }

    onClick(): void {
        this.$router.push({
            name: RouteNames.EQUIPMENT_GROUP,
            params: {
                group: 'home'
            }
        }).catch(error => console.error(error))
    }
}

</script>
