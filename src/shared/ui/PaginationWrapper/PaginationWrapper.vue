<template lang="pug">

.b-pagination-wrapper
    .__container.container
        slot
        .__wrapper(
            v-if="quantity > 1"
        )
            link-component.__link Показать еще
            pagination-component.__pagination(
                v-model="pageCount"
                :quantity="quantity"
                :nextVisiblePages="3"
                :prevVisiblePages="3"
            )

</template>

<script lang="ts">
import {Component, Prop, VModel, Vue} from 'vue-property-decorator'

import { Pagination } from '@/shared/ui/Pagination'

@Component({
    components: {
        'pagination-component': Pagination
    }
})
export default class PaginationWrapper extends Vue {
    @VModel() pageCount!: Pagination['currentValue']
    @Prop() readonly quantity!: Pagination['quantity']
}

</script>

<style lang="scss" src="./PaginationWrapper.critical.scss" />
<style lang="scss" src="./PaginationWrapper.main.scss" />
