<template lang="pug">

equipment-layout-component.page(
    :breadcrumb-list="breadcrumbList"
)

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import EquipmentLayout from '@/components/layouts/EquipmentLayout.vue'

import { breadcrumbListType } from '@/components/blanks/PageBreadcrumb.vue'

@Component({
    components: {
        'equipment-layout-component': EquipmentLayout,
    }
})
export default class EquipmentPage extends Vue {
    breadcrumbList: breadcrumbListType = [
        {
            text: 'Для фитнес клуба',
            href: '/equipment/gym'
        }
    ]
}
</script>
