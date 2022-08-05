import EquipmentStock from './EquipmentStock.vue'

export default {
    title: 'EquipmentStock',
    component: EquipmentStock,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {EquipmentStock},
    methods: {},
    template: '<EquipmentStock v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
