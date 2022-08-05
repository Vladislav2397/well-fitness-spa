<template lang="pug">

.b-equipment-detail
    .__container.container
        component.__wrapper(
            :is="!device.size.mobile ? 'two-columns-layout' : 'div'"
        )
            template(
                #left="{ _class }"
            )
                .__left(
                    :class="_class"
                )
                    gallery-component
            template(
                #right="{ _class }"
            )
                .__right(
                    :class="_class"
                )
                    price-tag-component
                    .configure-component
            template(
                v-if="!device.size.desktop"
            )
                gallery-component.__gallery
                price-tag-component.__price(
                    quantity="2"
                    :has-show-room="true"
                )
                .__accessories

</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'

import TwoColumnsLayout from '@/components/layouts/TwoColumnsLayout.vue'

import Gallery from '@/components/blanks/Gallery.vue'
import PriceTag from '@/components/blanks/PriceTag.vue'

import type { IDevice } from '@/use/device'

@Component({
    components: {
        'price-tag-component': PriceTag,
        'gallery-component': Gallery,
        'two-columns-layout': TwoColumnsLayout,
    }
})
export default class EquipmentDetail extends Vue {
    @Inject('$device') device!: IDevice
}

</script>
