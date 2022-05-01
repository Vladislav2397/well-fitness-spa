import TilingLayout from './TilingLayout.vue'

export default {
    title: 'UI/TilingLayout',
    component: TilingLayout,
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {TilingLayout},
    template: `<TilingLayout v-bind="" />`
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    //
}
