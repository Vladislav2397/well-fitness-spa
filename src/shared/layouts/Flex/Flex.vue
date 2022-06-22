<script lang="ts">
import {Component, Mixins, Prop} from 'vue-property-decorator'
import {CreateElement, VNode} from 'vue'

import { VueFlex } from '@/shared/layouts/VueFlex'
import { IEVueFlex } from '@/shared/layouts/IEVueFlex'
import FlexProps from '@/shared/mixins/FlexProps'

@Component
export default class Flex extends Mixins(FlexProps) {
    @Prop({ default: false }) readonly isIE!: boolean

    render(h: CreateElement): VNode {
        return h(this.isIE ? IEVueFlex : VueFlex, {
            key: `${this.isIE}`,
            props: {
                justifyContent: this.justifyContent,
                alignItems: this.alignItems,
                direction: this.direction,
            },
        // @ts-ignore
        }, this.$scopedSlots.default({ slotClass: 'vue-flex__item' }))
    }
}
</script>

<style lang="scss" src="./flex.scss"></style>
