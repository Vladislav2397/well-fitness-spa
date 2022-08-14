import TwoPanelLayout from './TwoPanelLayout.vue'

export default {
    title: 'TwoPanelLayout',
    component: TwoPanelLayout,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {TwoPanelLayout},
    methods: {},
    template: '<TwoPanelLayout v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
