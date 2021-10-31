import Navigation from '../../components/blanks/Navigation.vue'
import { selectControl } from '@/tools/stories'

export default {
    title: 'Blanks/Navigation',
    component: Navigation,
    argTypes: {
        align: selectControl(['vertical', 'horizontal'])
    }
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: {
        'navigation-component': Navigation
    },
    template: '<navigation-component v-bind="$props" v-on="$listeners"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
