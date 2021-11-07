<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue'

type Point = [x: number, y: number, sizeX: number, sizeY: number]

@Component
export default class VueGrid extends Vue {
    @Prop() readonly layout!: Point[]

    get rows (): Set<number> {
        return new Set(this.layout.map(item => item[1]))
    }

    get correctList (): VNode[] {
        return this?.$slots?.default?.filter(
            item => item.tag !== undefined
        ) ?? []
    }

    mounted (): void {
        console.log(this.$slots)
    }

    render (h: CreateElement): VNode {
        const tbody = h('tbody', {}, [])

        let i = 0

        for (const row of this.rows) {
            const rowChildren = []

            for (const col of this.layout.filter(item => item[1] === +(row))) {
                const slotChildren =
                    this.$slots.default && this.$slots.default[i]

                rowChildren.push(
                    h('td', {
                        ...col[0] !== 0 && {
                            class: 'not-first'
                        },
                        attrs: {
                            colspan: col[2],
                            rowspan: col[3]
                        },
                    }, [
                        slotChildren
                    ])
                )
                console.log('elm', slotChildren?.elm)
                i++
            }
            tbody.children?.push(h('tr', {}, rowChildren))
        }

        const children = [tbody]

        return h('table', {
            class: 'vue-grid'
        }, children)
    }
}

</script>
