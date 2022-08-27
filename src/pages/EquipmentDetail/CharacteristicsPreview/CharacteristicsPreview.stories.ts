import CharacteristicsPreview from './CharacteristicsPreview.vue'

export default {
    title: 'CharacteristicsPreview',
    component: CharacteristicsPreview,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {CharacteristicsPreview},
    methods: {},
    template: '<CharacteristicsPreview v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
