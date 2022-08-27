import DescriptionTab from './DescriptionTab.vue'

export default {
    title: 'DescriptionTab',
    component: DescriptionTab,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {DescriptionTab},
    methods: {},
    template: '<DescriptionTab v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
