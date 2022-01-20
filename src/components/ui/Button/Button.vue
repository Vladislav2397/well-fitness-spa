<script lang="ts">
import { CreateElement, VNode } from 'vue'
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

export type buttonThemeType = 'brand'
    | 'ghost-brand'
    | 'ghost-light'
    | 'ghost'
    | 'secondary'

@Component
export default class Button extends Vue {
    @Prop({ default: 'button' }) readonly tag!: 'button' | 'a' | 'div' | 'router-link'

    @Prop({ default: 'm' }) readonly size!: 'm' | 's'

    @Prop({ default: 'brand' }) readonly theme!: buttonThemeType

    @Prop() readonly icon!: string

    @Prop({ default: 'm' }) readonly iconSize!: 's' | 'm' | 'l'

    @Prop() readonly href!: string

    @Prop() readonly iconLeft!: boolean

    @Emit('click') clickEmit (): void {/**/}

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
        const children = []

        const icon = h('i', {
            class: `icon icon--size-${this.iconSize} icon--${this.icon}`
        })

        if (this.icon) {
            if (this.iconLeft) {
                children.push(icon)
            }
            children.push(this.$slots.default)
            if (!this.iconLeft) {
                children.push(icon)
            }
        } else {
            children.push(this.$slots.default)
        }

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
            },
            on: {
                click: this.clickEmit
            }
        }, children)
    }
}
</script>

<!--<style lang="scss" src="./button&#45;&#45;critical.scss"></style>-->
<!--<style lang="scss" src="./button&#45;&#45;main.scss"></style>-->
