import TheHeader from '../../components/blanks/TheHeader.vue'

export default {
    title: 'Blanks/TheHeader',
    component: TheHeader,
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { 'header-component': TheHeader },
    provide() {
        return {
            device: {
                size: {
                    mobile: false,
                    tablet: false,
                    tabletLate: false,
                    desktop: true,
                },
            },
        }
    },
    template: '<header-component v-bind="$props" />',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
