import AddToFavorites from './AddToFavorites.vue'

export default {
    title: 'AddToFavorites',
    component: AddToFavorites,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {AddToFavorites},
    methods: {},
    template: '<AddToFavorites v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
