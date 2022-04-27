<template lang="pug">

.page
    c-page-breadcrumb
    pagination-wrapper-component
        equipment-type-detail-component

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import {
    PageBreadcrumb
} from '@/entities/page-breadcrumb'
import PaginationWrapper from '@/components/sections/PaginationWrapper.vue'
import EquipmentTypeDetail from '@/components/sections/EquipmentTypeDetail.vue'
import { Action, Service } from '@/shared/config'
import { EquipmentGroupService } from '@/services/equipmentGroup'

@Component({
    components: {
        'equipment-type-detail-component': EquipmentTypeDetail,
        'pagination-wrapper-component': PaginationWrapper,
        'c-page-breadcrumb': PageBreadcrumb,
    }
})
export default class EquipmentType extends Vue {
    @Service('EquipmentGroup') equipmentGroupService!: EquipmentGroupService

    @Action('pageBreadcrumb/setList') setList!: (list: unknown[]) => void

    created() {
        this.setList([
            {
                text: 'Для фитнес клуба',
                href: '/equipments/gym'
            },
            {
                text: 'Кардиотренажеры',
                href: '/equipments/gym/1'
            },
        ])
    }

    mounted(): void {
        this.equipmentGroupService.initialize()
    }
}
</script>
