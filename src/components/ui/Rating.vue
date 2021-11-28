<template lang="pug">
    include ../../tools/pug/mixins

    +b.rating {{ hasLabel && 'Рейтинг' }}
        +e.list
            +e.star(
                v-for="i in 5"
                :key="i"
                :class="{ 'rating__star--fill' : i <= count }"
            )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Rating extends Vue {
    @Prop() readonly count!: 0 | 1 | 2 | 3 | 4 | 5

    @Prop({ default: true }) readonly hasLabel!: boolean
}

</script>
