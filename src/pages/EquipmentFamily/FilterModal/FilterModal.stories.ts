import FilterModal from './FilterModal.vue'

export default {
    title: 'FilterModal',
    component: FilterModal,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {FilterModal},
    methods: {},
    template: '<FilterModal v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
