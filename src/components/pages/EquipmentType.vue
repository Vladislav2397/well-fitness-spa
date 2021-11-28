<template lang="pug">

.page
    page-breadcrumb-component(
        title="Кардиотренажеры"
    )
    pagination-wrapper-component
        equipment-type-detail-component

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import PageBreadcrumb from '@/components/blanks/PageBreadcrumb.vue'
import PaginationWrapper from '@/components/sections/PaginationWrapper.vue'
import EquipmentTypeDetail from '@/components/sections/EquipmentTypeDetail.vue'

@Component({
    components: {
        'equipment-type-detail-component': EquipmentTypeDetail,
        'pagination-wrapper-component': PaginationWrapper,
        'page-breadcrumb-component': PageBreadcrumb
    }
})
export default class EquipmentType extends Vue {
}
</script>
