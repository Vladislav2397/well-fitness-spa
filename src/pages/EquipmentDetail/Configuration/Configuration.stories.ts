import Configuration from './Configuration.vue'

export default {
    title: 'Configuration',
    component: Configuration,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {Configuration},
    methods: {},
    template: '<Configuration v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
