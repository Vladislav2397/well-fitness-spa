import EquipmentDetail from './EquipmentDetail.vue'

export default {
    title: 'EquipmentDetail',
    component: EquipmentDetail,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {EquipmentDetail},
    methods: {},
    template: '<EquipmentDetail v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
