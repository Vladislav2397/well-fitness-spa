<script lang="ts">
import { Vue, Component, Prop, Ref } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue'

@Component
export default class VueFlex extends Vue {
    @Prop() readonly justify!: 'space-between'

    @Ref('container') containerRef!: HTMLElement

    @Ref('items') itemsRef!: HTMLElement[]

    containerWidth = 0
    commonWidth = 0
    commonEmptySpace = 0
    childrenCount = 0

    mounted (): void {
        this.updateSpacing()

        window.addEventListener('resize', this.updateSpacing)
    }

    beforeDestroy (): void {
        window.removeEventListener('resize', this.updateSpacing)
    }

    updateSpacing (): void {
        this.containerWidth =
            this.containerRef?.getBoundingClientRect()?.width ?? 0

        let result = 0

        this.itemsRef?.forEach(
            item => {
                result += item?.getBoundingClientRect()?.width ?? 0
            }
        )

        this.commonWidth = result

        this.commonEmptySpace = this.containerWidth - this.commonWidth
    }

    itemClasses (element: VNode, index: number): any {
        return {
            class: 'item',
            ref: 'items',
            refInFor: true,
            ...index !== 0 && {
                style: {
                    'margin-left' : `${this.commonEmptySpace / (this.childrenCount - 1)}px`
                }
            }
        }
    }

    render (h: CreateElement): VNode {
        const children: VNode[] = []

        this.childrenCount = this.$slots?.default?.length ?? 0

        this.$slots?.default?.forEach(
            (item, index) => {
                children.push(h('div', this.itemClasses(item, index), [item]))
            }
        )

        return h('div', { class: 'flex', ref: 'container' }, children)
    }
}
</script>

<style lang="scss">
.flex {
    padding: 0 toRem(50);
    width: 100%;
    white-space: nowrap;
}
.item {
    display: inline-block;
    white-space: normal;
}
</style>