<template lang="pug">

.in-stock
    ._inner
        quantity-component._quantity(
            :count="quantity"
        )
        link-component._link(
            v-if="hasShowRoom !== undefined"
            tag="router-link"
            href="/"
        ) {{ hasShowRoom ? 'Есть в шоу-руме' : 'Скоро ожидается' }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import Quantity from '@/components/ui/Quantity.vue'
import { EquipmentModuleTypes } from '@/store/types'

@Component({
    components: {
        'quantity-component': Quantity
    }
})
export default class InStock extends Vue {
    @Prop() readonly quantity!: EquipmentModuleTypes.item['quantity']
    @Prop() readonly hasShowRoom!: EquipmentModuleTypes.item['hasShowRoom']
}

</script>
