<template lang="pug">

.page
    c-page-breadcrumb
    pagination-wrapper-component
        equipment-type-detail-component

</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'

import { PageBreadcrumb } from '@/entities/page-breadcrumb'
import PaginationWrapper from '@/components/sections/PaginationWrapper.vue'
import EquipmentTypeDetail from '@/components/sections/EquipmentTypeDetail.vue'

import { Action, Getter, Service } from '@/shared/config'
import { EquipmentGroupService } from '@/services/equipmentGroup'
import { EquipmentFamilyService } from '@/services/equipmentFamily'
// import { categoryStore } from '@/entities/category/model'
import { familyModel } from '@/entities/family'

@Component({
    components: {
        'equipment-type-detail-component': EquipmentTypeDetail,
        'pagination-wrapper-component': PaginationWrapper,
        'c-page-breadcrumb': PageBreadcrumb,
    }
})
export default class EquipmentFamily extends Vue {
    @Service('EquipmentGroup') equipmentGroupService!: EquipmentGroupService
    @Service('EquipmentFamily') equipmentFamilyService!: EquipmentFamilyService

    @Getter('equipment/activeCategory') activeCategory!: any
    @Getter('equipment/families') families!: any

    @Action('pageBreadcrumb/setList') setList!: (list: unknown[]) => void

    // categoryStore = categoryStore()
    familyStore = familyModel.useStore()

    async created(): Promise<void> {
        await this.familyStore.fetchFamily(
            this.$route.params.group,
            this.$route.params.family,
        )

        await this.setList([
            {
                text: 'Для фитнес клуба',
                href: '/equipments/gym'
            },
            {
                text: this.familyStore.activeFamily?.name ?? '',
                href: this.$route.path
            },
        ])
    }

    @Watch('activeCategory', { immediate: true })
    onChangeActiveCategory(newValue: number, oldValue: number): void {
        if (newValue !== oldValue) {
            this.equipmentFamilyService.fetchActiveCategory()
        }
    }
}
</script>
