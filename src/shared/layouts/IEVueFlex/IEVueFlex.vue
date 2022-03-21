<script lang="ts">
import {Component, Mixins, Ref} from 'vue-property-decorator'
import {CreateElement, VNode} from 'vue'
import FlexProps from '@/shared/mixins/FlexProps'

const sum = (...args: (number | string)[]) => args.reduce<number>((t, i) => +t + +i, 0)

@Component
export default class IEVueFlex extends Mixins(FlexProps) {
    @Ref('container') containerRef!: HTMLDivElement
    @Ref('item') itemRef!: HTMLDivElement[]

    isMount = false

    get class(): string {
        return 'ie-vue-flex'
    }

    get currentSlot() {
        if (this.$slots.default && this.$slots.default.length) {
            return this.$slots.default.filter(slot => !!slot.tag)
        }
        return []
    }

    get classes(): string[] {
        const classes: string[] = []

        if (this.justifyContent) {
            classes.push(`${this.class}--jc-${this.justifyContent}`)
        }

        if (this.alignItems) {
            classes.push(`${this.class}--ai-${this.alignItems}`)
        }

        if (this.direction) {
            classes.push(`${this.class}--d-${this.direction}`)
        }

        return classes
    }

    itemsWidth(): number {
        let widths

        if (this.itemRef) {
            widths = this.itemRef.map(
                ref => ref.getBoundingClientRect().width
            )
        } else {
            widths = [0]
        }

        return sum(...widths)
    }

    containerWidth(): number {
        if (this.containerRef) {
            return this.containerRef.getBoundingClientRect().width
        }
        return 0
    }

    spaceBetween(index: number) {
        const commonWidth = this.itemsWidth()
        const containerWidth = this.containerWidth()
        const childCount = this.currentSlot.length

        return index !== 0
            ? `${(containerWidth - commonWidth) / (childCount - 1)}px`
            : undefined
    }

    spaceAround(index: number) {
        const commonWidth = this.itemsWidth()
        const containerWidth = this.containerWidth()
        const childCount = this.currentSlot.length

        return index === 0
            ? `${(containerWidth - commonWidth) / childCount / 2}px`
            : `${(containerWidth - commonWidth) / childCount}px`
    }

    spaceEvenly() {
        const commonWidth = this.itemsWidth()
        const containerWidth = this.containerWidth()
        const childCount = this.currentSlot.length

        return`${(containerWidth - commonWidth) / (childCount + 1)}px`
    }

    slots(): VNode[] {
        return this.currentSlot.map((slot, index) => {
            let spacing = ''

            if (this.justifyContent === 'space-between') {
                spacing = this.spaceBetween(index) || ''
            } else if (this.justifyContent === 'space-around') {
                spacing = this.spaceAround(index) || ''
            } else if (this.justifyContent === 'space-evenly') {
                spacing = this.spaceEvenly()
            }

            return this.$createElement('div', {
                class: `ie-vue-flex__item`,
                ...this.justifyContent === 'space-between' && spacing && {
                    style: { 'margin-left':  spacing }
                },
                ...this.justifyContent === 'space-around' && spacing && {
                    style: { 'margin-left':  spacing }
                },
                ...this.justifyContent === 'space-evenly' && spacing && {
                    style: { 'margin-left':  spacing }
                },
                ref: 'item',
                refInFor: true,
            }, [ slot ])
        })
    }

    slotsReverse(): VNode[] {
        return this.currentSlot.reverse().map((slot, index) => {
            let spacing = ''

            if (this.justifyContent === 'space-between') {
                spacing = this.spaceBetween(index) || ''
            } else if (this.justifyContent === 'space-around') {
                spacing = this.spaceAround(index) || ''
            } else if (this.justifyContent === 'space-evenly') {
                spacing = this.spaceEvenly()
            }

            return this.$createElement('div', {
                class: `ie-vue-flex__item`,
                ...this.justifyContent === 'space-between' && spacing && {
                    style: { 'margin-left':  spacing }
                },
                ...this.justifyContent === 'space-around' && spacing && {
                    style: { 'margin-left':  spacing }
                },
                ...this.justifyContent === 'space-evenly' && spacing && {
                    style: { 'margin-left':  spacing }
                },
                ref: 'item',
                refInFor: true,
            }, [ slot ])
        })
    }

    mounted(): void {
        this.isMount = true
    }

    root(): VNode {
        return this.$createElement(
            'div',
            {
                class: [
                    this.class,
                    ...this.classes
                ],
                ref: 'container'
            },
            this.direction === 'row-reverse' || this.direction === 'column-reverse'
                ? this.slotsReverse()
                : this.slots()
        )
    }

    render(h: CreateElement): VNode {
        console.log('render', this.containerRef)

        const root = this.root()

        if (this.isMount) {
            const spacing = this.containerWidth() - this.itemsWidth()
            console.log(spacing)
        }

        return root
    }
}
</script>

<style lang="scss" src="./ie-vue-flex--critical.scss"></style>
