import Tiling from './Tiling.vue'

export default {
    title: 'UI/Tiling',
    component: Tiling,
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { Tiling },
    template: `<Tiling v-bind="" />`,
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    //
}
