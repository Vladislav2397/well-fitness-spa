<template lang="pug">

.b-section-wrapper(
    :class="`section-wrapper--theme-${theme}`"
)
    .__title(
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
        button-component.__button(
            v-if="buttonText"
            tag="a"
            :theme="buttonTheme"
            v-on:click="clickEmit"
        ) {{ buttonText }}

</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

import type { buttonThemeType } from '@/shared/ui/Button'

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

<style lang="scss" src="./SectionWrapper.critical.scss" />
<style lang="scss" src="./SectionWrapper.main.scss" />
