import TheHeader from '../../components/blanks/TheHeader.vue'

export default {
    title: 'Blanks/TheHeader',
    component: TheHeader,
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { 'header-component': TheHeader },
    template: '<header-component v-bind="$props" />',
})

export const Default = Template.bind({})
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Default.args = {}
