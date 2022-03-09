import { Component, Vue } from 'vue-property-decorator'
import { CreateElement, RenderContext, VNode } from 'vue'

@Component
export default class AddToCartButton extends Vue.extend({
    functional: true,
}) {
    render(h: CreateElement, context: RenderContext): VNode {
        return h(
            'button-component',
            {
                on: {
                    click: () => {
                        //
                    },
                },
            },
            ['Купить'],
        )
    }
}
