<template lang="pug">

card-product-component.b-equipment-card
    card-product-stats-component.__content(
        :has-show-room="true"
        :price="price"
        :quantity="3"
        :title="equipmentCard.name"
        :rating="4"
        :info="device.size.desktop ? [['key', 'value']] : []"
        :isRatingLabel="!device.size.mobile"
        :isPriceRow="device.size.tablet"
    )

</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator'

import CardProduct from '@/components/blanks/cards/CardProduct.vue'
import CardProductStats from '@/components/blanks/cards/CardProductStats.vue'

// import { Equipment } from '../../model'
import type { IDevice } from '@/use/device'

@Component({
    components: {
        'card-product-component': CardProduct,
        'card-product-stats-component': CardProductStats,
    }
})
export default class EquipmentCard extends Vue {
    @Prop() readonly equipmentCard!: any
    @Prop() readonly id!: any

    @Inject('$device') device!: IDevice

    get price(): CardProductStats['price'] {
        return [
            this.equipmentCard?.price?.current ?? '0',
            this.equipmentCard?.price?.old ?? '0',
        ]
    }
}
</script>

<style lang="scss" src="./equipment-card--critical.scss"></style>
<style lang="scss" src="./equipment-card--main.scss"></style>
