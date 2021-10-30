<template lang="pug">
include ../../tools/pug/mixins

+b.dealers(
    :class="classes"
)
    span Для дилеров
    template(
        v-if="view === 'default'"
    )
        button-component(
            size="s"
            theme="secondary"
        ) Become a Partner
    template(
        v-else
    )
        link-component(
            tag="span"
        ) Become a Partner

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Dealers extends Vue {
    @Prop({ default: 'default'}) readonly view!: 'default' | 'modal'

    get classes (): string[] {
        const classes = []

        if (this.view) classes.push(`dealers--view-${this.view}`)

        return classes
    }
}

</script>
