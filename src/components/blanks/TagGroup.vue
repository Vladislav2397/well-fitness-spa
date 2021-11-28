<template lang="pug">

row-layout-component.tag-group(
    :overflow="device.size.mobile ? 'scroll' : 'wrap'"
)
    template(
        v-for="(item, index) in list"
    )
        component._tag(
            :is="`${tagName}-component`"
            :key="index"
            :theme="isActive(index) ? 'brand' : 'secondary'"
            @click="onClick(index)"
        ) {{ item }}

</template>

<script lang="ts">
import { Component, Mixins, Prop, VModel } from 'vue-property-decorator'

import RowLayout from '@/components/layouts/RowLayout.vue'
import Device from '@/mixins/device'

@Component({
    components: {
        'row-layout-component': RowLayout
    }
})
export default class TagGroup extends Mixins(Device) {
    @VModel() activeIndex!: number | number[]

    @Prop({ default: 'button' }) readonly tagName!: 'button' | 'link'

    @Prop() readonly list!: string[]

    isActive(index: number) {
        if (typeof this.activeIndex === 'number')
            return this.activeIndex === index
        return this.activeIndex.includes(index)
    }

    onClick(index: number) {
        if (typeof this.activeIndex === 'number') this.activeIndex = index
        else {
            if (this.activeIndex.includes(index))
                this.activeIndex =
                    this.activeIndex.filter(item => item !== index)
            else
                this.activeIndex.push(index)
        }
    }
}

</script>
