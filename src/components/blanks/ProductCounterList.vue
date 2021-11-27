<template lang="pug">

.product-counter-list
    ._title {{ title }}
    ._list
        ._item(
            v-for="item in list"
        )
            span {{ item.text }}
            span {{ item.count }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export type productCounterListType = {
    text: string
    count: number
}[]

@Component
export default class ProductCounterList extends Vue {
    @Prop() readonly title!: string
    @Prop() readonly list!: productCounterListType
}

</script>
