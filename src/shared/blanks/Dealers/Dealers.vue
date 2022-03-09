<script lang="ts">
import {CreateElement, RenderContext, VNode} from 'vue'
import { Component } from 'vue-property-decorator'

import {VueFunctional} from '@/shared/config/functionalComponent'

interface DealersProps {
    view: 'default' | 'modal'
}

@Component
export default class Dealers extends VueFunctional {
    render(
        h: CreateElement,
        { data, props }: RenderContext<DealersProps>
    ): VNode {
        const view = props.view ?? 'default'
        const isDefault = view === 'default'
        const classes = [data.staticClass, 'dealers', `dealers--view-${view}`]

        const actionChild = ['Become a Partner']

        const label = h('span', ['Для дилеров'])

        const action = isDefault
            ? h('button-component', {
                props: {
                    size: 's',
                    theme: 'secondary',
                }
            }, actionChild)
            : h('link-component', {
                props: {
                    tag: 'span'
                },
            }, actionChild)

        return h('div', { class: classes }, [label, action])
    }
}

</script>
