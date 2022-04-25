import CategoryFilters from './CategoryFilters.vue'

export default {
    title: 'UI/CategoryFilters',
    component: CategoryFilters,
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {CategoryFilters},
    template: `<CategoryFilters v-bind="" />`
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    //
}
