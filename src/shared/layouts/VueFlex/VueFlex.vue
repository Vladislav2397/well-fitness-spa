<script lang="ts">
import {Component, Mixins, Ref} from 'vue-property-decorator'
import {CreateElement, VNode} from 'vue'

import FlexProps from '@/shared/mixins/FlexProps'

@Component
export default class VueFlex extends Mixins(FlexProps) {
    @Ref('container') containerRef!: HTMLDivElement
    @Ref('item') itemRef!: HTMLDivElement[]

    get currentClass(): string {
        return 'vue-flex'
    }

    get currentSlot() {
        const slots = this.$scopedSlots.default!(
            { slotClass: ['vue-flex__item'] }
        )

        if (slots && slots.length) {
            return slots.filter(slot => !!slot.tag)
        }
        return []
    }

    get classes(): string[] {
        const classes: string[] = []

        if (this.justifyContent) {
            classes.push(`${this.currentClass}--jc-${this.justifyContent}`)
        }

        if (this.alignItems) {
            classes.push(`${this.currentClass}--ai-${this.alignItems}`)
        }

        if (this.direction) {
            classes.push(`${this.currentClass}--d-${this.direction}`)
        }

        return classes
    }

    render(h: CreateElement): VNode {
        return h('div', {
            class: [
                this.currentClass,
                ...this.classes
            ]
        }, this.currentSlot)
    }
}
</script>

<style lang="scss" src="./vue-flex.scss"></style>
