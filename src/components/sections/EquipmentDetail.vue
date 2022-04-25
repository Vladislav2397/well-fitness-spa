<template lang="pug">

.equipment-detail
    ._container.container
        component._wrapper(
            :is="!device.size.mobile ? 'two-columns-layout' : 'div'"
        )
            template(
                #left="{ _class }"
            )
                ._left(
                    :class="_class"
                )
                    gallery-component
            template(
                #right="{ _class }"
            )
                ._right(
                    :class="_class"
                )
                    price-tag-component
                    .configure-component
            template(
                v-if="!device.size.desktop"
            )
                gallery-component._gallery
                price-tag-component._price(
                    quantity="2"
                    :has-show-room="true"
                )
                ._accessories

</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'

import TwoColumnsLayout from '@/components/layouts/TwoColumnsLayout.vue'

import { IDevice } from '@/use/device'
import Gallery from '@/components/blanks/Gallery.vue'
import PriceTag from '@/components/blanks/PriceTag.vue'

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
