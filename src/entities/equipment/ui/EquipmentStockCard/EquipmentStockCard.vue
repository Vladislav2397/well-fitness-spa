<template lang="pug">

card-product-component.b-equipment-stock-card
    card-product-stats-component.__stats(
        :quantity="card.quantity"
        :hasShowRoom="card.hasShowRoom"
        :title="card.title"
        :rating="card.rating"
        :price="card.price"
        :is-price-row="device.size.mobile"
    )
        template(
            #action
        )
            button-component(
                v-if="!device.size.mobile"
                :iconLeft="true"
                icon="cart"
            ) Купить

</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator'
import CardProductStats from '@/components/blanks/cards/CardProductStats.vue'
import { IDevice } from '@/use/device'

type Card = Pick<
    CardProductStats,
    | 'quantity'
    | 'hasShowRoom'
    | 'title'
    | 'rating'
    | 'price'
>

@Component
export default class EquipmentStockCard extends Vue {
    @Inject('$device') device!: IDevice

    @Prop() readonly card!: Card
}
</script>

<style lang="scss" src="./equipment-stock-card--critical.scss"></style>
<style lang="scss" src="./equipment-stock-card--main.scss"></style>
