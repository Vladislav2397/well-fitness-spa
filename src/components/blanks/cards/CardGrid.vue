<template lang="pug">
include ../../../tools/pug/mixins

+b.card-grid(
    :class="classes"
)
    +e.title(
        v-html="title"
    )
    +e.image
        img(
            :src="imageSrc"
            :alt="imageAlt"
        )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CardGrid extends Vue {
    @Prop({
        default: 'none'
    }) readonly stretch!: 'vertical' | 'horizontal' | 'default' | 'none'

    @Prop({
        default: 'light',
    }) readonly theme!: 'dark' | 'light' | 'secondary'

    @Prop() readonly title!: string

    @Prop() readonly imageSrc!: string

    @Prop() readonly imageAlt!: string

    get classes (): string[] {
        const classes = []

        if (this.stretch) classes.push(`card-grid--stretch-${this.stretch}`)

        if (this.theme) classes.push(`card-grid--theme-${this.theme}`)

        return classes
    }
}

</script>
