<template lang="pug">

c-card-product.b-catalog-card(
    :to="to"
)
    c-card-product-stats.__stats(
        :hasRating="true"
        :hasShowRoom="true"
        :quantity="3"
        :title="content.label"
        :rating="4"
        :price="[1000, 1200]"
    )

</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

import CardProduct from "@/components/blanks/cards/CardProduct.vue"
import CardProductStats from "@/components/blanks/cards/CardProductStats.vue"

import {Equipment} from "@/entities/equipment"

@Component({
    components: {
        'c-card-product-stats': CardProductStats,
        'c-card-product': CardProduct
    }
})
export default class CatalogCard extends Vue {
    @Prop() readonly id!: string | number
    @Prop() readonly to!: string

    get content() {
        return Equipment.find(this.id)
    }
}
</script>

<style lang="scss" src="./CatalogCard.critical.scss" />
<style lang="scss" src="./CatalogCard.main.scss" />
