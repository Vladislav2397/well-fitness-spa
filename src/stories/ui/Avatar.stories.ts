import Avatar from '../../components/ui/Avatar.vue'

export default {
    title: 'Ui/Avatar',
    component: Avatar,
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: {'avatar-component': Avatar},
    template: '<avatar-component v-bind="$props" />',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}

