<template lang="pug">

.b-brand
    ._container.container
        section-wrapper-component._wrapper(
            title="Популярные бренды"
            buttonText="Все бренды"
        )
            ._links.scroll-row
                link-component._link(
                    v-for="({text, href}, index) in links"
                    :key="index"
                    :href="href"
                    tag="router-link"
                    theme="dark"
                ) {{ text }}
            ._list
                ._item(
                    v-for="(i, index) in brandLogoCount"
                    :key="index"
                    :class="itemClasses(index)"
                )

</template>

<script lang="ts">
import {Component, Inject, Vue} from 'vue-property-decorator'

import { SectionWrapper } from '../SectionWrapper'

import type {IDevice} from '@/use/device'

@Component({
    components: {
        'section-wrapper-component': SectionWrapper
    }
})
export default class Brand extends Vue {
    @Inject('$device') device!: IDevice

    links = [
        {
            text: 'Беговые дорожки',
            href: '',
        },
        {
            text: 'Эллиптические тренажеры',
            href: '',
        },
        {
            text: 'Велотренажеры',
            href: '',
        },
        {
            text: 'Силовые тренажеры',
            href: '',
        },
        {
            text: 'Батуты',
            href: '',
        },
        {
            text: 'Игровые столы',
            href: '',
        },
    ]

    get brandLogoCount (): number {
        return this.device.size.desktop ? 15 : 12
    }

    get countColumns (): number {
        if (this.device.size.mobile) return 3
        if (this.device.size.tablet) return 4
        return 5
    }

    itemClasses (index: number): string[] {
        const classes = []

        switch ((index + 1) % this.countColumns) {
        case 0:
            classes.push('last')
            break
        case 1:
            classes.push('first')
            break
        }

        if (index >= this.countColumns) {
            classes.push('border-top')
        }

        return classes
    }
}

</script>

<style lang="scss" src="./Brand.critical.scss" />
<style lang="scss" src="./Brand.main.scss" />
