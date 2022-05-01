import Catalog from './Catalog.vue'

export default {
    title: 'UI/Catalog',
    component: Catalog,
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {Catalog},
    template: `<Catalog v-bind="" />`
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    //
}
