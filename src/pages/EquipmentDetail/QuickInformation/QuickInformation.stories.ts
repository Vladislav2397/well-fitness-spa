import QuickInformation from './QuickInformation.vue'

export default {
    title: 'QuickInformation',
    component: QuickInformation,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {QuickInformation},
    methods: {},
    template: '<QuickInformation v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
