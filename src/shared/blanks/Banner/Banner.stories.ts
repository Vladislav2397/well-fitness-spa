import Banner from './Banner.vue'

export default {
    title: 'Blanks/Banner',
    component: Banner,
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {Banner},
    template: `<Banner v-bind="" />`
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    //
}
