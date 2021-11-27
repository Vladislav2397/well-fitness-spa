<template lang="pug">

section-wrapper-component.grid-section(
    :title="title"
    :buttonText="button"
    @click="clickEmit"
)
    vue-grid-component._grid(
        :layout="layout"
    )
        card-grid-component._card(
            v-for="(card, index) in cardList"
            :key="index"
            :title="card.title"
            :imageSrc="card.image.src"
            :imageAlt="card.image.alt"
            :theme="card.theme"
            :stretch="card.stretch"
        )

</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

import { Point } from './VueGrid.vue'

import VueGrid from '@/components/blanks/VueGrid.vue'
import CardGrid from '@/components/blanks/cards/CardGrid.vue'
import SectionWrapper from '@/components/blanks/SectionWrapper.vue'

export type cardType = {
    title: string
    href: string
    image: {
        src: string
        alt: string
    }
    theme: 'dark' | 'light' | 'secondary',
    stretch: 'horizontal' | 'vertical' | 'none' | 'default'
}

@Component({
    components: {
        'section-wrapper-component': SectionWrapper,
        'vue-grid-component': VueGrid,
        'card-grid-component': CardGrid,

    }
})
export default class GridSection extends Vue {
    @Prop() readonly layout!: Point[]

    @Prop() readonly cardList!: cardType[]

    @Prop() readonly title!: string

    @Prop() readonly button!: string

    @Emit('click') clickEmit() {/**/}
}

</script>
