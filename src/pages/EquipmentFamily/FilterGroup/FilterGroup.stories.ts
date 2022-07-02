import FilterGroup from './FilterGroup.vue'

export default {
    title: 'FilterGroup',
    component: FilterGroup,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {FilterGroup},
    methods: {},
    template: '<FilterGroup v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
