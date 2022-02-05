<template lang="pug">

row-layout-component.tag-group(
    :overflow="device.size.mobile ? 'scroll' : 'wrap'"
)
    template(
        v-for="(item, index) in list"
    )
        button-component._tag(
            :key="index"
            :theme="isActive(index) ? 'brand' : 'secondary'"
            size="s"
            @click="onClick(index)"
        ) {{ item }}

</template>

<script lang="ts">
import {Component, Vue, Prop, VModel, Inject} from 'vue-property-decorator'

import RowLayout from '@/components/layouts/RowLayout.vue'
import { IDevice } from '@/mixins/device'

@Component({
    components: {
        'row-layout-component': RowLayout
    }
})
export default class TagGroup extends Vue {
    @Inject('$device') device!: IDevice

    @VModel() activeIndex!: number | number[]

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
