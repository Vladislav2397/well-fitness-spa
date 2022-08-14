import AddToCart from './AddToCart.vue'

export default {
    title: 'AddToCart',
    component: AddToCart,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {AddToCart},
    methods: {},
    template: '<AddToCart v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
