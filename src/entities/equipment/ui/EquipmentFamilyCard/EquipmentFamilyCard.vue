<template lang="pug">

c-card-product.b-equipment-family-card(
    imageSrc="equipmentFamily.image.src"
    imageAlt="equipmentFamily.image.alt"
    :to="`${$route.params.group}/${1 /*equipmentFamily.id*/}`"
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
import * as equipmentModel from '../../model/index'

type EquipmentFamily = {
    image: {
        src: string
        alt: string
    }
} & Pick<ProductCounterList, 'title' | 'list'>

@Component({
    components: {
        'c-product-counter-list': ProductCounterList,
        'c-card-product': CardProduct
    }
})
export default class EquipmentFamilyCard extends Vue {
    @Prop() readonly id!: number | string

    get content() {
        const Model = equipmentModel.EquipmentFamily

        return Model.query().with('categories').find(this.id) // .query().whereId(this.id).get()
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
