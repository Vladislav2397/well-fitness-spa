import FooterLinks from './FooterLinks.vue'

export default {
    title: 'FooterLinks',
    component: FooterLinks,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {FooterLinks},
    methods: {},
    template: '<FooterLinks v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
