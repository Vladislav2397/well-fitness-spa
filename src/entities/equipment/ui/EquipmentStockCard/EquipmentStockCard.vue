<template lang="pug">

c-card-product.b-equipment-stock-card
    c-card-product-stats.__stats(
        :quantity="content.quantity || 3"
        :hasShowRoom="content.hasShowRoom"
        :title="content.name"
        :rating="content.rating"
        :price="content.price || [ 1000, 2000 ]"
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

import CardProduct from '@/components/blanks/cards/CardProduct.vue'
import CardProductStats from '@/components/blanks/cards/CardProductStats.vue'

import type { IDevice } from '@/use/device'
import {Equipment} from '@/entities/equipment/model'
import {Model} from "@/shared/config/decorators"
import {Repository} from "@vuex-orm/core"

@Component({
    components: {
        'c-card-product': CardProduct,
        'c-card-product-stats': CardProductStats,
    }
})
export default class EquipmentStockCard extends Vue {
    @Prop() readonly id!: number | string

    @Inject('$device') device!: IDevice

    @Model(Equipment)
    Equipment!: Repository<Equipment>

    get content() {
        return this.Equipment.find(this.id ?? 0)
    }
}
</script>

<style lang="scss" src="./equipment-stock-card--critical.scss"></style>
<style lang="scss" src="./equipment-stock-card--main.scss"></style>
