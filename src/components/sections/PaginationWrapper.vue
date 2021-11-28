<template lang="pug">

.pagination-wrapper
    ._container.container
        slot
        ._wrapper
            link-component._link Показать еще
            pagination-component._pagination(
                v-model="pageCount"
            )

</template>

<script lang="ts">
import { Component, VModel, Vue } from 'vue-property-decorator'

import Pagination from '@/components/blanks/Pagination.vue'

@Component({
    components: {
        'pagination-component': Pagination
    }
})
export default class PaginationWrapper extends Vue {
    @VModel() pageCount!: number
}

</script>
