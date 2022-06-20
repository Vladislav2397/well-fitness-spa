<template lang="pug">

.b-pagination-wrapper
    .__container.container
        slot
        .__wrapper(
            v-if="pageCount"
        )
            link-component.__link Показать еще
            pagination-component.__pagination(
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
