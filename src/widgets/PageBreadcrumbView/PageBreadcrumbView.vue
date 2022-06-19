<template lang="pug">

.b-page-breadcrumb-view
    c-page-breadcrumb(
        :list="list"
    )
    router-view

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PageBreadcrumb from "@/shared/blanks/PageBreadcrumb/PageBreadcrumb.vue"

@Component({
    components: {
        'c-page-breadcrumb': PageBreadcrumb,
    }
})
export default class PageBreadcrumbView extends Vue {
    get list(): PageBreadcrumb['list'] {
        return [{
            text: 'equipmentGroup',
            href: '/gym',
        }]
    }
}
</script>

<style lang="scss" src="./PageBreadcrumbView.critical.scss"></style>
<style lang="scss" src="./PageBreadcrumbView.main.scss"></style>
