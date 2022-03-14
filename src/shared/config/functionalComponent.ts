import { Vue } from 'vue-property-decorator'
import { CreateElement, RenderContext, VNode } from 'vue'

export const VueFunctional = Vue.extend({ functional: true })

export function Functional<Props>(
    renderFn: (h: CreateElement, context: RenderContext<Props>) => VNode,
): any {
    return {
        functional: true,
        render(h: CreateElement, context: RenderContext<Props>) {
            return renderFn(h, context)
        },
    }
}
