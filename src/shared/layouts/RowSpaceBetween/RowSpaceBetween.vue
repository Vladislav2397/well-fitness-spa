<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue'

@Component
export default class RowSpaceBetween extends Vue {
    @Ref('container') containerRef!: HTMLDivElement
    @Ref('items') itemsRef!: HTMLDivElement | HTMLDivElement[]

    isIE = true

    itemsStyle = {
        'margin-left': '0'
    }

    get slots(): VNode[] {
        // @ts-ignore
        return this.$scopedSlots?.default() ?? []
    }

    mounted() {
        window.addEventListener('resize', this.computedMargin)

        this.computedMargin()
    }

    beforeDestroy() {
        window.removeEventListener('resize', this.computedMargin)
    }

    beforeUpdate() {
        this.computedMargin()
    }

    computedMargin(): void {
        this.itemsStyle['margin-left'] =
            `${this.computedStyles() / (this.slots.length - 1)}px`
    }

    currentChild(): VNode[] {
        return this.isIE
            ? this.slots.map((child, index) => {
                return this.$createElement(
                    'div',
                    {
                        class: 'row-space-between__wrapper',
                        style: index > 0 ? this.itemsStyle : undefined,
                        ref: 'items',
                        refInFor: true
                    },
                    [ child ]
                )
            })
            : this.slots
    }

    computedStyles(): number {
        const containerWidth = this.containerRef?.getBoundingClientRect().width ?? 0
        const itemsWidth = Array.isArray(this.itemsRef)
            ? this.itemsRef?.map(ref => ref.getBoundingClientRect().width) ?? [0]
            : [ this.itemsRef?.getBoundingClientRect().width ?? 0 ]

        console.log('widths', containerWidth, itemsWidth)
        console.log(
            'delta',
            containerWidth - itemsWidth.reduce((t, i) => t + i, 0)
        )

        return containerWidth - itemsWidth.reduce((t, i) => t + i, 0)
    }

    render(h: CreateElement): VNode {
        if (this.isIE) {
            this.computedStyles()

            return h(
                'div',
                {
                    class: ['row-space-between', 'ie'],
                    ref: 'container',
                },
                this.currentChild()
            )
        }

        return h(
            'div',
            {
                class: ['row-space-between'],
                ref: 'container',
            },
            this.currentChild()
        )
    }
}
</script>

<style lang="scss" src="./row-space-between--critical.scss"></style>
<style lang="scss" src="./row-space-between--main.scss"></style>
