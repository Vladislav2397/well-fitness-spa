<template lang="pug">

.b-equipment-preview(
    :class="classes"
)
    .__title(
        v-html="props.title"
    )
    .__image
        img(
            :src="props.imageSrc"
            :alt="props.imageAlt"
        )

</template>

<script lang="ts" setup>
import {computed} from '@vue/composition-api'
import {defineProps, withDefaults} from '@vue/runtime-dom'

const props = withDefaults(
    defineProps<{
        stretch: 'vertical' | 'horizontal' | 'default' | 'none'
        theme: 'dark' | 'light' | 'secondary'
        title: string
        imageSrc: string
        imageAlt: string
    }>(), {
        stretch: 'none',
        theme: 'light'
    }
)

const classes = computed(() => {
    const classes = []

    if (props.stretch) classes.push(`equipment-preview--stretch-${props.stretch}`)

    if (props.theme) classes.push(`equipment-preview--theme-${props.theme}`)

    return classes
})

</script>

<style lang="scss" src="./equipment-preview--critical.scss"></style>
<style lang="scss" src="./equipment-preview--main.scss"></style>
