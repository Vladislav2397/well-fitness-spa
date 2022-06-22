<script lang="ts">
import {Component, Mixins, Ref} from 'vue-property-decorator'
import {VNode} from 'vue'
import FlexProps from '@/shared/mixins/FlexProps'

// import read from '@/utils/flexibility/lib/read'
// @ts-ignore
import readAll from '@/utils/flexibility/lib/readAll'
// import write from '@/utils/flexibility/lib/write'
// @ts-ignore
import writeAll from '@/utils/flexibility/lib/writeAll'

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

        // if (this.justifyContent) {
        //     classes.push(`${this.class}--jc-${this.justifyContent}`)
        // }
        //
        // if (this.alignItems) {
        //     classes.push(`${this.class}--ai-${this.alignItems}`)
        // }
        //
        // if (this.direction) {
        //     classes.push(`${this.class}--d-${this.direction}`)
        // }

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
            // let spacing = ''

            // if (this.justifyContent === 'space-between') {
            //     spacing = this.spaceBetween(index) || ''
            // } else if (this.justifyContent === 'space-around') {
            //     spacing = this.spaceAround(index) || ''
            // } else if (this.justifyContent === 'space-evenly') {
            //     spacing = this.spaceEvenly()
            // }

            return this.$createElement('div', {
                class: `ie-vue-flex__item`,
                // ...this.justifyContent === 'space-between' && spacing && {
                //     style: { 'margin-left':  spacing }
                // },
                // ...this.justifyContent === 'space-around' && spacing && {
                //     style: { 'margin-left':  spacing }
                // },
                // ...this.justifyContent === 'space-evenly' && spacing && {
                //     style: { 'margin-left':  spacing }
                // },
                ref: 'item',
                refInFor: true,
            }, [ slot ])
        })
    }

    slotsReverse(): VNode[] {
        const copy = [ ...this.currentSlot ]

        return copy.reverse().map((slot, index) => {
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

    get dataStyleAttrs() {
        let stylesString = 'display: flex'

        const join = (...args: string[]) => [...args].join(';')

        if (this.justifyContent) {
            stylesString = join(stylesString, `justify-content:${this.justifyContent}`)
        }

        if (this.alignItems) {
            stylesString = join(stylesString, `align-items:${this.alignItems}`)
        }

        if (this.direction) {
            stylesString = join(stylesString, `flex-direction:${this.direction}`)
        }

        return stylesString
    }

    root(): VNode {

        return this.$createElement(
            'div',
            {
                class: [
                    this.class,
                    // ...this.classes
                ],
                ref: 'container',
                attrs: {
                    'data-style': this.dataStyleAttrs
                }
            },
            /*this.direction === 'row-reverse' || this.direction === 'column-reverse'
                ? this.slotsReverse()
                :*/ this.slots()
        )
    }

    render(): VNode {
        const root = this.root()


        if (this.isMount) {
            // const spacing = this.containerWidth() - this.itemsWidth()
            // flexibility(document.querySelector('.ie-vue-flex'))
            this.$nextTick(() => {
                const styles = readAll(document.querySelector('.ie-vue-flex'))
                console.log('read styles', styles)
                writeAll(styles)
            })
        }

        return root
    }

    // @Watch('dataStyleAttrs')
    // onChangeAttrs() {
    //     this.$nextTick(() => {
    //         console.log('call flexibility')
    //         console.log('flex write', write(read(document.querySelector('.ie-vue-flex'))))
    //     })
    // }
}
</script>

<style lang="scss" src="./ie-vue-flex--critical.scss"></style>
