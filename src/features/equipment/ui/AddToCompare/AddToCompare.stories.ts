import AddToCompare from './AddToCompare.vue'

export default {
    title: 'AddToCompare',
    component: AddToCompare,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {AddToCompare},
    methods: {},
    template: '<AddToCompare v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
