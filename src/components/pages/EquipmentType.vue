<template lang="pug">

.page
    page-breadcrumb-component(
        title="Кардиотренажеры"
    )
    pagination-wrapper-component
        banner-component

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import PageBreadcrumb from '@/components/blanks/PageBreadcrumb.vue'
import PaginationWrapper from '@/components/sections/PaginationWrapper.vue'
import Banner from '@/components/blanks/Banner.vue'

@Component({
    components: {
        'banner-component': Banner,
        'pagination-wrapper-component': PaginationWrapper,
        'page-breadcrumb-component': PageBreadcrumb
    }
})
export default class EquipmentType extends Vue {
}
</script>
