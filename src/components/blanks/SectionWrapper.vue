<template lang="pug">

.section-wrapper(
    :class="`section-wrapper--theme-${theme}`"
)
    ._title(
        v-if="title"
    ) {{ title }}
    slot(
        name="title"
        v-else
    )
    slot
    slot(
        name="button"
    )
        button-component._button(
            :theme="buttonTheme"
            v-on:click="clickEmit"
        ) {{ buttonText }}

</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

import { buttonThemeType } from '@/components/ui/Button.vue'

@Component
export default class SectionWrapper extends Vue {
    @Prop() readonly title!: string

    @Prop({ default: 'light' }) readonly theme!: 'dark' | 'light'

    @Prop() readonly buttonText!: string

    @Prop({
        default: 'ghost-brand'
    }) readonly buttonTheme!: buttonThemeType

    @Emit('click') clickEmit (): void {/**/}
}

</script>
