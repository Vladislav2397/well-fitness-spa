import CatalogLayout from './CatalogLayout.vue'

export default {
    title: 'CatalogLayout',
    component: CatalogLayout,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {CatalogLayout},
    methods: {},
    template: '<CatalogLayout v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
