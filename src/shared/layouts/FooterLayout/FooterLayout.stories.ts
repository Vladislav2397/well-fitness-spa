import FooterLayout from './FooterLayout.vue'

export default {
    title: 'FooterLayout',
    component: FooterLayout,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {FooterLayout},
    methods: {},
    template: '<FooterLayout v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
