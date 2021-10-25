import Link from '../../components/ui/Link.vue'

export default {
    title: 'Ui/Link',
    component: Link,
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: {'link-component': Link},
    template: '<link-component v-bind="$props">Link</link-component>',
})

export const Default = Template.bind({})
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Default.args = {}
