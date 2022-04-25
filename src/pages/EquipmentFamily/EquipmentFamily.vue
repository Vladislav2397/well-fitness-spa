<template lang="pug">

.page
    c-page-breadcrumb(
        title="Кардиотренажеры"
        :list="breadcrumbList"
    )
    pagination-wrapper-component
        equipment-type-detail-component

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import {
    PageBreadcrumb,
    breadcrumbListType
} from '@/shared/blanks/PageBreadcrumb'
import PaginationWrapper from '@/components/sections/PaginationWrapper.vue'
import EquipmentTypeDetail from '@/components/sections/EquipmentTypeDetail.vue'
import { Service } from '@/shared/config'
import { EquipmentGroupService } from '@/services/equipmentGroup'

@Component({
    components: {
        'equipment-type-detail-component': EquipmentTypeDetail,
        'pagination-wrapper-component': PaginationWrapper,
        'c-page-breadcrumb': PageBreadcrumb
    }
})
export default class EquipmentType extends Vue {
    @Service('EquipmentGroup') equipmentGroupService!: EquipmentGroupService

    breadcrumbList: breadcrumbListType = [
        {
            text: 'Для фитнес клуба',
            href: '/equipments/gym'
        },
        {
            text: 'Кардиотренажеры',
            href: '/equipments/gym/1'
        },
    ]

    mounted(): void {
        this.equipmentGroupService.initialize()
    }
}
</script>
