<template lang="pug">

.page-breadcrumb
    ._container.container
        ._top
            i.icon.icon--size-m.icon--home
            ._links
                link-component(
                    v-for="({ text, href }, index) in list"
                    :key="index"
                    tag="router-link"
                    :href="href"
                ) {{ text }}
        ._title {{ title || list.at(-1).text }}

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

<style lang="scss">
@import 'src/assets/scss/blanks/page-breadcrumb/page-breadcrumb--critical';
</style>
