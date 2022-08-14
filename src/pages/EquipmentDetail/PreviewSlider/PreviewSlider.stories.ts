import PreviewSlider from './PreviewSlider.vue'

export default {
    title: 'PreviewSlider',
    component: PreviewSlider,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {PreviewSlider},
    methods: {},
    template: '<PreviewSlider v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
