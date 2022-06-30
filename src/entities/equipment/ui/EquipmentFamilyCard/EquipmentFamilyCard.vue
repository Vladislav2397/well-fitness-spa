<template lang="pug">

c-card-product.b-equipment-family-card(
    imageSrc="equipmentFamily.image.src"
    imageAlt="equipmentFamily.image.alt"
    :to="`${$route.params.group}/${id}`"
)
    c-product-counter-list(
        :title="content.name"
        :list="list"
    )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import CardProduct from '@/components/blanks/cards/CardProduct.vue'
import ProductCounterList from '@/components/blanks/ProductCounterList.vue'
import {Model} from "@/shared/config/decorators"
import {EquipmentFamily} from "@/entities/equipment"
import {Repository} from "@vuex-orm/core"

@Component({
    components: {
        'c-product-counter-list': ProductCounterList,
        'c-card-product': CardProduct
    }
})
export default class EquipmentFamilyCard extends Vue {
    @Prop() readonly id!: number | string

    @Model(EquipmentFamily) EquipmentFamily!: Repository<EquipmentFamily>

    get content() {
        return this.EquipmentFamily
            .query()
            .with('categories')
            .find(`${this.id}`)
    }

    get list() {
        // @ts-ignore
        return this.content.categories.map(category => [
            category.name,
            category.count,
        ])
    }
}
</script>

<style lang="scss" src="./equipment-family-card--critical.scss" />
<style lang="scss" src="./equipment-family-card--main.scss" />
