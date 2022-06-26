<template lang="pug">

.page
    page-breadcrumb-component(
        title="Кардиотренажеры"
        :list="breadcrumbList"
    )
    pagination-wrapper-component
        equipment-type-detail-component

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import PageBreadcrumb, {
    breadcrumbListType
} from '@/components/blanks/PageBreadcrumb.vue'
import { PaginationWrapper } from '@/shared/ui/PaginationWrapper'
import EquipmentTypeDetail from '@/components/sections/EquipmentTypeDetail.vue'

@Component({
    components: {
        'equipment-type-detail-component': EquipmentTypeDetail,
        'pagination-wrapper-component': PaginationWrapper,
        'page-breadcrumb-component': PageBreadcrumb
    }
})
export default class EquipmentType extends Vue {
    breadcrumbList: breadcrumbListType = [
        {
            text: 'Для фитнес клуба',
            href: '/equipment/gym'
        },
        {
            text: 'Кардиотренажеры',
            href: '/equipment/gym/cardio'
        },
    ]


}
</script>
