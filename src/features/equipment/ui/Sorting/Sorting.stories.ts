import Sorting from './Sorting.vue'

export default {
    title: 'UI/Sorting',
    component: Sorting,
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {Sorting},
    template: `<Sorting v-bind="" />`
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    //
}
