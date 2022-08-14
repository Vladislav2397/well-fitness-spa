<template lang="pug">

.b-preview-slider
    .__main
        .__image
            img
    .__wrapper
        .__button.-left
            i.b-icon.-chevron-left
        .__list
            .__item.is-active(
                v-for="item in list"
            )
                img(
                    :src="item.src"
                    :alt="item.alt"
                )
        .__button.-right
            i.b-icon.-chevron-right

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PreviewSlider extends Vue {
    list = [
        {
            src: 'src/to/path',
            alt: 'alt'
        },
        {
            src: 'src/to/path',
            alt: 'alt'
        },
        {
            src: 'src/to/path',
            alt: 'alt'
        },
    ]
}
</script>

<style lang="scss" src="./PreviewSlider.critical.scss" />
<style lang="scss" src="./PreviewSlider.main.scss" />
