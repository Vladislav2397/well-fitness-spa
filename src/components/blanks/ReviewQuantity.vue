<template lang="pug">

.review-quantity
    ._rating
    ._common
    ._list
        ._review
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import { ReviewModel } from '@/components/blanks/Review.vue'

@Component
export default class ReviewQuantity extends Vue {
    @Prop() readonly reviews!: ReviewModel['rating']
}

</script>
