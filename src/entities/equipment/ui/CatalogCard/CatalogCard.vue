<template lang="pug">

c-card-product.b-catalog-card(
    :to="to"
)
    c-card-product-stats.__stats(
        :hasRating="true"
        :hasShowRoom="true"
        :quantity="3"
        :title="content.label"
        :rating="content.rating"
        :price="[1000, 1200]"
    )

</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

import CardProduct from "@/components/blanks/cards/CardProduct.vue"
import CardProductStats from "@/components/blanks/cards/CardProductStats.vue"

import {Equipment} from "@/entities/equipment"
import {Model} from "@/shared/config/decorators"
import {Repository} from "@vuex-orm/core"

@Component({
    components: {
        'c-card-product-stats': CardProductStats,
        'c-card-product': CardProduct
    }
})
export default class CatalogCard extends Vue {
    @Prop() readonly id!: string | number
    @Prop() readonly to!: string

    @Model(Equipment) Equipment!: Repository<Equipment>

    get content() {
        return this.Equipment.find(`${this.id}`)
    }
}
</script>

<style lang="scss" src="./CatalogCard.critical.scss" />
<style lang="scss" src="./CatalogCard.main.scss" />
