import PageBreadcrumb from './PageBreadcrumb.vue'

export default {
    title: 'UI/PageBreadcrumb',
    component: PageBreadcrumb,
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { PageBreadcrumb },
    template: `<PageBreadcrumb v-bind="$props" />`,
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    //
}
