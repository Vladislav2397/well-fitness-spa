import RowSpaceBetween from './RowSpaceBetween.vue'

export default {
    title: 'UI/RowSpaceBetween',
    component: RowSpaceBetween,
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {RowSpaceBetween},
    template: `<RowSpaceBetween v-bind="" />`
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    //
}
