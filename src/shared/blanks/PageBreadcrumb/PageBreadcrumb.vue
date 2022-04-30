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
        .__title {{ currentTitle }}

</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

export type breadcrumbListType = {
    text: string,
    href: string,
}[]

@Component
export default class PageBreadcrumb extends Vue {
    @Prop() readonly list!: breadcrumbListType
    @Prop() readonly title!: string

    get currentTitle(): string {
        return this.title || (this.list?.at(-1)?.text ?? '')
    }
}
</script>

<style lang="scss" src="./page-breadcrumb--critical.scss"></style>
<style lang="scss" src="./page-breadcrumb--main.scss"></style>
