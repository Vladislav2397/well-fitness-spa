<template lang="pug">

.b-equipment-information-card
    c-quantity.__quantity(
        :count="3"
        :has-show-room="true"
    )
    c-price.__price(
        :is-row="true"
        new="199000"
        old="209000"
        size="base"
    )
    c-dealer-price.__dealer(
        price="12039"
    )
    c-bonus-price.__bonus(
        price="600"
    )
    .__cart
    link-component.__link(
        theme="brand"
        tag="button"
    ) Купить в рассрочку от 16 658 ₽ /мес

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import Quantity from "@/components/ui/Quantity.vue"
import Price from "@/components/blanks/Price.vue"
import DealerPrice from "@/entities/equipment/ui/DealerPrice/DealerPrice.vue"
import BonusPrice from "@/entities/equipment/ui/BonusPrice/BonusPrice.vue"

@Component({
    components: {
        'c-bonus-price': BonusPrice,
        'c-dealer-price': DealerPrice,
        'c-price': Price,
        'c-quantity': Quantity
    }
})
export default class EquipmentInformationCard extends Vue {
    //
}
</script>

<style lang="scss" src="./EquipmentInformationCard.critical.scss" />
<style lang="scss" src="./EquipmentInformationCard.main.scss" />
