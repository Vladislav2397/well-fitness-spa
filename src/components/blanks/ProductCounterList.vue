<template lang="pug">

.b-product-counter-list
    .__title {{ title }}
    .__list
        .__item(
            v-for="([ text, count], index) in list"
            :key="index"
        )
            span {{ text }}
            span {{ count }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export type productCounterListType = [
    text: string, count: number
][]

@Component
export default class ProductCounterList extends Vue {
    @Prop() readonly title!: string
    @Prop() readonly list!: productCounterListType
}

</script>

<style lang="scss" src="../../assets/scss/blanks/product-counter-list/product-counter-list--critical.scss" />
<style lang="scss" src="../../assets/scss/blanks/product-counter-list/product-counter-list--main.scss" />
