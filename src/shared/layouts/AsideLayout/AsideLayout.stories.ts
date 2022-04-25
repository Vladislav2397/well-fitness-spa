import AsideLayout from './AsideLayout.vue'

export default {
    title: 'UI/AsideLayout',
    component: AsideLayout,
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {AsideLayout},
    template: `<AsideLayout v-bind="" />`
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    //
}
