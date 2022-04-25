<template lang="pug">

c-card-product.b-equipment-family-card(
    :imageSrc="equipmentFamily.image.src"
    :imageAlt="equipmentFamily.image.alt"
    :to="`${$route.params.group}/${equipmentFamily.id}`"
)
    c-product-counter-list(
        :title="equipmentFamily.title"
        :list="equipmentFamily.list"
    )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import CardProduct from '@/components/blanks/cards/CardProduct.vue'
import ProductCounterList from '@/components/blanks/ProductCounterList.vue'

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
    @Prop() readonly equipmentFamily!: EquipmentFamily
}
</script>

<style lang="scss" src="./equipment-family-card--critical.scss" />
<style lang="scss" src="./equipment-family-card--main.scss" />
