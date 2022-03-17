import Vue, { CreateElement, VNode } from 'vue'
import Input from '@/shared/ui/Input.vue'

const withValidation = ({
    binding,
    listeners,
}: {
    binding: Record<string, any>
    listeners?: Record<string, any>
}) => {
    return Vue.component('withValidation', {
        methods: {},
        render(h: CreateElement): VNode {
            return h(Input, {
                props: {
                    textSize: 'p3',
                    placeholder: 'placeholder',
                    error: false,
                    ...binding,
                },
                on: {
                    'update:error': (value: boolean) => (this.error = value),
                },
            })
        },
    })
}

export const InputValidation = withValidation({
    binding: {
        error: false,
    },
    listeners: {
        'update:error': () => (this.error = true),
    },
})
