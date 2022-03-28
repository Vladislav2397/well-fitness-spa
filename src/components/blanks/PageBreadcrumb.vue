<template lang="pug">

.b-page-breadcrumb
    .__container.container
        .__top
            i.b-icon.-size-m.-home
            .__links
                link-component(
                    v-for="({ text, href }, index) in list"
                    :key="index"
                    tag="router-link"
                    :href="href"
                ) {{ text }}
        .__title {{ title || list.at(-1).text }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export type breadcrumbListType = {
    text: string,
    href: string,
}[]

@Component
export default class PageBreadcrumb extends Vue {
    @Prop() readonly list!: breadcrumbListType
    @Prop() readonly title!: string
}

</script>

<!--<style lang="scss">-->
<!--@import 'src/assets/scss/blanks/page-breadcrumb/page-breadcrumb&#45;&#45;critical';-->
<!--</style>-->
