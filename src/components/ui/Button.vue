<script lang="ts">
import { CreateElement, VNode } from 'vue'
import { Vue, Component, Prop } from 'vue-property-decorator'

type buttonThemeType = 'brand' | 'ghost-brand' | 'ghost' | 'secondary'

@Component
export default class Button extends Vue {
    @Prop({ default: 'button' }) readonly tag!: 'button' | 'a' | 'div' | 'router-link'

    @Prop({ default: 'm' }) readonly size!: 'm' | 's'

    @Prop({ default: 'brand' }) readonly theme!: buttonThemeType

    @Prop() readonly icon!: string

    @Prop() readonly href!: string

    @Prop() readonly iconLeft!: boolean

    get classes (): string[] {
        const classes = ['button']

        classes.push(`button--theme-${this.theme}`)
        classes.push(`button--size-${this.size}`)

        if (this.icon) {
            if (this.iconLeft) {
                classes.push(`button--icon-left`)
            } else {
                classes.push(`button--icon-right`)
            }
        }

        return classes
    }

    render (h: CreateElement): VNode {
        return h('button', {
            class: this.classes,
            ...this.tag === 'a' && {
                attrs: {
                    href: this.href,
                    target: '_blank',
                    rel: 'noopener noreferrer'
                }
            },
            ...this.tag === 'router-link' && {
                attrs: {
                    to: this.href
                }
            }
        }, this.$slots.default)
    }
}
</script>