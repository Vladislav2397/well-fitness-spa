<script lang="ts">
import {CreateElement, RenderContext, VNode} from 'vue'
import { Component } from 'vue-property-decorator'

import {VueFunctional} from '@/shared/config/functionalComponent'

interface IconProps {
    size: string
    name: string
}

@Component
export default class Icon extends VueFunctional {
    render(h: CreateElement, { props, data, listeners }: RenderContext<IconProps>): VNode {
        return h('i', {
            class: [
                `${data.staticClass}`,
                'icon',
                `icon--size-${props.size ?? 'm'}`,
                `icon--${props.name ?? 'arrow'}`
            ],
            on: {
                ...listeners
            }
        })
    }
}
</script>

<style lang="scss" src="./icon--critical.scss"></style>
