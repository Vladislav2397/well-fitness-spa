<script lang="ts">
import { CreateElement, RenderContext, VNode } from 'vue'
import { Icon, IconProps } from '@/shared/ui/Icon'

export interface LinkProps {
    tag: 'a' | 'router-link' | 'span'
    iconSize: 's' | 'm' | 'l'
    theme: LinkThemeType
    href: string
    icon: string
    iconLeft: boolean
}

export type LinkThemeType =
    | 'primary'
    | 'secondary'
    | 'white'
    | 'dark'

export default {
    functional: true,
    render(
        h: CreateElement,
        { props, data, listeners, children }: RenderContext<LinkProps>
    ): VNode {
        const defaultProps = {
            ...props,
            tag: props.tag || 'a',
            iconSize: props.iconSize || 'm',
            theme: props.theme || 'secondary',
        }

        const classes = () => {
            const classes = ['link', data.staticClass]

            if (defaultProps.theme) {
                classes.push(`link--theme-${defaultProps.theme}`)
            }

            if (defaultProps.icon) {
                defaultProps.iconLeft
                    ? classes.push('link--icon-left')
                    : classes.push('link--icon-right')
            }

            return classes
        }

        const iconComponent = h(Icon, {
            props: {
                size: defaultProps.iconSize,
                name: defaultProps.icon,
            } as IconProps
        })

        const child = []

        if (defaultProps.icon) {
            if (defaultProps.iconLeft) {
                child.push(iconComponent)
            }
            child.push(children)
            if (!defaultProps.iconLeft) {
                child.push(iconComponent)
            }
        } else {
            child.push(children)
        }

        return h(defaultProps.tag, {
            props: {
                ...defaultProps.tag === 'router-link' && {
                    to: defaultProps.href
                }
            },
            class: classes(),
            on: {
                ...listeners.click && {
                    click: listeners.click
                }
            }
        }, child)
    }
}
</script>

<style lang="scss" src="./link--critical.scss"></style>
<style lang="scss" src="./link--main.scss"></style>
