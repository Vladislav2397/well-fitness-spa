<template lang="pug">

.price-tag
    ._section
        in-stock-component._stock(
            v-bind="inStockProps"
        )
        price-component._price(
            :is-row="true"
            :new="199000"
            :old="229999"
            class-prices="price-tag__digits"
        )
    ._section
        ._bonus
            span Бонусных рублей
            span + 600
            link-component._link(
                theme="primary"
                href="#"
            ) Цена для дилера
    ._section
        ._actions
            counter-component._counter(
                v-model="counter"
            )
            button-component._button.-to-cart(
                :iconLeft="true"
                icon="cart"
            ) В корзину
        link-component._instalments(
            theme="primary"
            tag="router-link"
            href="#"
        ) Купить в рассрочку от 16 658 ₽ /мес
    ._section
        rating-component._rating(
            v-for="rating in ratings"
            :count="rating[1]"
        ) {{ rating[0] }}
        rating-component._rating.-common(
            :is-bold="true"
            :count="commonRating"
        ) Общий рейтинг
    ._section
        button-component._button.-to-modal(
            theme="ghost-brand"
        ) Доп. информация

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import { EquipmentModuleTypes } from '@/store/types'

import Quantity from '@/components/ui/Quantity.vue'
import InStock from '@/components/blanks/InStock.vue'
import Price from '@/components/blanks/Price.vue'
import Counter from '@/components/ui/Counter.vue'
import Rating from '@/components/ui/Rating.vue'

@Component({
    components: {
        'rating-component': Rating,
        'counter-component': Counter,
        'price-component': Price,
        'in-stock-component': InStock,
        'quantity-component': Quantity
    }
})
export default class PriceTag extends Vue {
    @Prop() readonly quantity!: EquipmentModuleTypes.item['quantity']
    @Prop() readonly hasShowRoom!: EquipmentModuleTypes.item['hasShowRoom'] | undefined

    counter = 1

    ratings = [
        ['Функциональность', 4],
        ['Качество', 5],
        ['Комфорт', 4],
        ['Цена', 4],
    ] as [string, (0 | 1 | 2 | 3 | 4 | 5)][]

    get inStockProps() {
        return {
            quantity: this.quantity,
            hasShowRoom: this.hasShowRoom,
        }
    }

    get commonRating(): any {
        let result = 0

        this.ratings.forEach(item => result += item[1])

        return Math.round(result / this.ratings.length)
    }
}

</script>
