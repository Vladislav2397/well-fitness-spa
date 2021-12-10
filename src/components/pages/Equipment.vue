<template lang="pug">

.page.-light
    page-breadcrumb-component(
        :list="breadcrumbList"
        title="Беговая дорожка Bowflex BTX128"
    )
    equipment-detail-section
    .tab-group-component
        template(
            v-if="true"
        )
    .accessories-component

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import PageBreadcrumb, {
    breadcrumbListType
} from '@/components/blanks/PageBreadcrumb.vue'
import EquipmentDetail from '@/components/sections/EquipmentDetail.vue'

@Component({
    components: {
        'equipment-detail-section': EquipmentDetail,
        'page-breadcrumb-component': PageBreadcrumb
    }
})
export default class EquipmentPage extends Vue {
    breadcrumbList: breadcrumbListType = [
        {
            text: 'Для фитнес клуба',
            href: '/equipment/gym'
        },
        {
            text: 'Кардиотренажеры',
            href: '/equipment/gym/cardio'
        },
        {
            text: 'Беговая дорожка Bowflex BTX128',
            href: '/equipment/gym/cardio/1'
        }
    ]
}
</script>
