<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import {CreateElement, VNode} from 'vue'

import Input from '@/shared/ui/Input.vue'

@Component
export default class Hoc extends Vue {
    @Prop() readonly binding!: Record<string, any>
    @Prop({ default: () => /.+/ }) readonly validRegex!: RegExp

    value = ''
    error = false

    isFilled() {
        return Boolean(this.value)
    }

    isValid(): boolean {
        return this.validRegex.test(this.value ?? '')
    }

    validate(): void {
        this.error = !this.isValid()
    }

    render(h: CreateElement): VNode {
        return h(Input, {
            props: {
                value: this.value,
                error: this.error,
                ...this.binding,
            },
            on: {
                'input': (value: string) => this.value = value,
                'update:error': (value: boolean) => this.error = value,
            }
        })
    }
}
</script>
