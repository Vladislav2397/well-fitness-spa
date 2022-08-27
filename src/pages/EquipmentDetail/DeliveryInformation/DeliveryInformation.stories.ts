import DeliveryInformation from './DeliveryInformation.vue'

export default {
    title: 'DeliveryInformation',
    component: DeliveryInformation,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {DeliveryInformation},
    methods: {},
    template: '<DeliveryInformation v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
