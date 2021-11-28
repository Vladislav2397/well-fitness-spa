<template lang="pug">

.row-layout(
    :class="classes"
)
    slot(
        :classItem="'row-layout__item'"
    )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class RowLayout extends Vue {
    @Prop({ default: 'scroll' }) readonly overflow!: 'wrap' | 'scroll'

    get classes(): string[] {
        const classes = []

        if (this.overflow) classes.push(`row-layout--${this.overflow}`)

        return classes
    }
}

</script>
