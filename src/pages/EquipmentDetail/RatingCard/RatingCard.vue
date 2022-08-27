<template lang="pug">

.b-rating-card
    .__item(
        v-for="prop in properties"
    )
        span {{ prop.title }}
        c-rating(
            :count="prop.value"
            :has-label="false"
        )
    .__total
        span Общий рейтинг
        c-rating(
            :count="totalCount"
            :has-label="false"
        )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import Rating from '@/components/ui/Rating.vue'

@Component({
    components: {
        'c-rating': Rating,
    },
})
export default class RatingCard extends Vue {
    properties: {
        title: string
        value: 0 | 1 | 2 | 3 | 4 | 5
    }[] = [
        {
            title: 'Функциональность',
            value: 4,
        },
        {
            title: 'Качество',
            value: 3,
        },
        {
            title: 'Цена',
            value: 4,
        },
    ]

    get totalCount() {
        return (
            this.properties.reduce((total, item) => {
                return total + +item.value
            }, 0) / this.properties.length
        )
    }
}
</script>

<style lang="scss" src="./RatingCard.critical.scss" />
<style lang="scss" src="./RatingCard.main.scss" />
