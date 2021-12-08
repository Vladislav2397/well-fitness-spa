<template lang="pug">

.page
    page-breadcrumb-component(
        :list="breadcrumbList"
        title="Бренды"
    )

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import PageBreadcrumb, {
    breadcrumbListType
} from '@/components/blanks/PageBreadcrumb.vue'

@Component({
    components: {
        'page-breadcrumb-component': PageBreadcrumb
    },
})
export default class BrandPage extends Vue {
    breadcrumbList: breadcrumbListType = [
        {
            text: 'Бренды',
            href: '/brands'
        },
    ]
}
</script>
