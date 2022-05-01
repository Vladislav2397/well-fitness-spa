<script lang="ts">
import {Component, Prop, VModel, Vue} from 'vue-property-decorator'
import {CreateElement, VNode} from 'vue'

import { Input } from '@/shared/ui/Input'

export interface HocComponent {
    valueModel: Hoc['valueModel']
    binding: Hoc['binding']
}

@Component
export default class Hoc extends Vue {
    @VModel() valueModel!: string

    @Prop() readonly binding!: Record<string, any>
    @Prop({ default: () => /.+/ }) readonly validRegex!: RegExp

    error = false

    public isFilled(): boolean {
        return Boolean(this.valueModel)
    }

    public isValid(): boolean {
        return this.validRegex.test(this.valueModel ?? '')
    }

    public validate(): void {
        this.error = !this.isValid()
    }

    updated(): void {
        console.log('updated Hoc')
    }

    render(h: CreateElement): VNode {
        return h(Input, {
            props: {
                value: this.valueModel,
                error: this.error,
                ...this.binding,
            },
            on: {
                'input': (value: string) => this.valueModel = value,
                'update:error': (value: boolean) => this.error = value,
            }
        })
    }
}
</script>
