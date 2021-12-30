<template lang="pug">

.review
    user-component._user
    rating-component._rating
    ._content
        template(
            v-if="text"
        ) {{ text }}
        slot(
            v-else
        )
    link-component._link(
        theme="primary"
    )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import User, { UserModel } from '@/components/ui/User.vue'
import Rating from '@/components/ui/Rating.vue'

export interface ReviewModel {
    user: UserModel
    rating: [number, number, number, number, number]
    text: string
}

@Component({
    components: {
        'rating-component': Rating,
        'user-component': User
    }
})
export default class Review extends Vue implements ReviewModel {
    @Prop() readonly rating!: ReviewModel['rating']
    @Prop() readonly user!: ReviewModel['user']
    @Prop() readonly text!: ReviewModel['text']
    @Prop() readonly isCollapsed!: boolean
}

</script>
