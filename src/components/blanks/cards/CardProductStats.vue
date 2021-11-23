<template lang="pug">
include ../../../tools/pug/mixins

+b.card-product-stats
    +e.QUANTITY-COMPONENT.quantity(
        v-if="quantity"
        :count="quantity"
    )
    +e.LINK-COMPONENT.link(
        v-if="hasShowRoom"
        tag="router-link"
        href="/"
    ) {{ hasShowRoom ? 'Есть в шоу-руме' : 'Скоро ожидается' }}
    +e.title {{ title }}
    +e.info(
        v-if="info"
    )
        p(
            v-for="line in info"
        ) {{ `${line[0]}: ${line[1]}` }}
    +e.RATING-COMPONENT.rating(
        :count="rating"
        :hasLabel="isRatingLabel"
    )
    +e.bottom
        +e.price(
            :class="{ 'card-product-stats__price--row' : isPriceRow }"
        )
            span {{ price[0].toLocaleString() }}
            del(
                v-if="price.length > 1"
            ) {{ price[1].toLocaleString() }}
        +e.action(
            v-if="$slots.action"
        )
            slot(
                name="action"
            )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import Quantity from '@/components/ui/Quantity.vue'
import Rating from '@/components/ui/Rating.vue'

import { ProductCardType } from '@/components/sections/Stock.vue'

@Component({
    components: {
        'rating-component': Rating,
        'quantity-component': Quantity
    }
})
export default class CardProductStats extends Vue {
    @Prop() readonly quantity!: ProductCardType['quantity']
    @Prop() readonly hasShowRoom!: ProductCardType['hasShowRoom']
    @Prop() readonly info!: [key: string, value: string][]
    @Prop() readonly title!: ProductCardType['title']
    @Prop() readonly rating!: ProductCardType['rating']
    @Prop() readonly price!: ProductCardType['price']

    @Prop({ default: false }) readonly isTitleBold!: boolean
    @Prop({ default: true }) readonly isRatingLabel!: boolean
    @Prop({ default: false }) readonly isPriceRow!: boolean
}

</script>
