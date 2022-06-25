import FooterMiddle from './FooterMiddle.vue'

export default {
    title: 'FooterMiddle',
    component: FooterMiddle,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {FooterMiddle},
    methods: {},
    template: '<FooterMiddle v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
