import CardPost from './CardPost.vue'

export default {
    title: 'UI/CardPost',
    component: CardPost,
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { CardPost },
    template: `<CardPost v-bind="" />`,
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    //
}
