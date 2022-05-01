<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue'

type linkThemeType =
    | 'primary'
    | 'secondary'
    | 'white'
    | 'dark'

@Component
export default class Link extends Vue {
    @Prop({ default: 'a' }) readonly tag!: 'a' | 'router-link' | 'span'
    @Prop({ default: 'm' }) readonly iconSize!: 's' | 'm' | 'l'
    @Prop({ default: 'secondary' }) readonly theme!: linkThemeType
    @Prop() readonly href!: string
    @Prop() readonly icon!: string
    @Prop() readonly iconLeft!: boolean

    @Emit('click') clickEmit(): void {/**/}

    get classes (): string[] {
        const classes = ['link']

        if (this.theme) classes.push(`link--theme-${this.theme}`)

        if (this.icon) {
            this.iconLeft
                ? classes.push('link--icon-left')
                : classes.push('link--icon-right')
        }

        return classes
    }

    get iconClasses (): string[] {
        const classes = ['icon']

        if (this.icon) classes.push(`icon--${this.icon}`)

        if (this.iconSize) classes.push(`icon--size-${this.iconSize}`)

        return classes
    }

    render (h: CreateElement): VNode {
        const settings = {
            class: this.classes,
            on: {
                click: this.clickEmit
            },
            props: {
                ...this.tag === 'router-link' && {
                    to: this.href
                }
            }
        }

        const children = []

        const icon = h('i', {
            class: this.iconClasses,
        }, [])

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

        return h(this.tag, settings, children)
    }
}

</script>
