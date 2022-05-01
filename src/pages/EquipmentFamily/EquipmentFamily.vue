<template lang="pug">

.page
    c-page-breadcrumb
    pagination-wrapper-component
        c-catalog

</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'

import PaginationWrapper from '@/components/sections/PaginationWrapper.vue'
import { PageBreadcrumb } from '@/entities/page-breadcrumb'
import { Catalog } from '@/pages/EquipmentFamily/Catalog'

import { Action, Getter, Service } from '@/shared/config'
import { EquipmentGroupService } from '@/services/equipmentGroup'
import { EquipmentFamilyService } from '@/services/equipmentFamily'
// import { categoryStore } from '@/entities/category/model'
import { familyModel } from '@/entities/family'
import { equipmentModel } from '@/entities/equipment'

@Component({
    components: {
        'c-catalog': Catalog,
        'pagination-wrapper-component': PaginationWrapper,
        'c-page-breadcrumb': PageBreadcrumb,
    }
})
export default class EquipmentFamily extends Vue {
    @Service('EquipmentGroup') equipmentGroupService!: EquipmentGroupService
    @Service('EquipmentFamily') equipmentFamilyService!: EquipmentFamilyService

    @Getter('equipment/activeCategory') activeCategory!: any
    @Getter('equipment/families') families!: any

    @Action('pageBreadcrumb/setList') setList!: (list: unknown[]) => Promise<void>

    // categoryStore = categoryStore()
    familyStore = familyModel.useStore()
    equipmentStore = equipmentModel.useStore()

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
