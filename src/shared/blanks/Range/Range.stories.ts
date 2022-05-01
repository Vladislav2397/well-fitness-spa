import Range from './Range.vue'

export default {
    title: 'UI/Range',
    component: Range,
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {Range},
    template: `<Range v-bind="" />`
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    //
}
