<template lang="pug">

.equipment-layout
    page-breadcrumb-component(
        :list="breadcrumbList"
    )
    slot
    idea-component
    stock-component

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import PageBreadcrumb, { breadcrumbListType } from '@/components/blanks/PageBreadcrumb.vue'
import { Idea } from '@/pages/Main/sections/Idea'
import Stock from '@/components/sections/Stock.vue'

@Component({
    components: {
        'stock-component': Stock,
        'idea-component': Idea,
        'page-breadcrumb-component': PageBreadcrumb
    }
})
export default class EquipmentLayout extends Vue {
    @Prop() readonly breadcrumbList!: breadcrumbListType
}

</script>
