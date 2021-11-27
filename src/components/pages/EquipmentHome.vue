<template lang="pug">

equipment-layout-component.page(
    :breadcrumb-list="breadcrumbList"
)
    collection-component


</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import EquipmentLayout from '@/components/layouts/EquipmentLayout.vue'
import Collection from '@/components/sections/Collection.vue'

import { breadcrumbListType } from '@/components/blanks/PageBreadcrumb.vue'

@Component({
    components: {
        'collection-component': Collection,
        'equipment-layout-component': EquipmentLayout,
    }
})
export default class EquipmentPage extends Vue {
    breadcrumbList: breadcrumbListType = [
        {
            text: 'Для дома',
            href: '/equipment/home'
        }
    ]

}
</script>
