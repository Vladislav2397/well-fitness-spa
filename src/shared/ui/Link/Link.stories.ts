import Link from './Link.vue'
import { defineControls } from '@/tools/stories'

export default {
    title: 'Ui/Link',
    component: Link,
    argTypes: defineControls({
        tag: ['router-link', 'a', 'span', 'div'],
        iconSize: ['s', 'm', 'l'],
        theme: ['primary', 'secondary'],
        href: '',
        icon: '',
        iconLeft: false,
    }),
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: {
        'link-component': Link,
    },
    template: '<link-component v-bind="$props">Link</link-component>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
