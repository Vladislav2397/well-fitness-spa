import Dealers from '../../components/blanks/Dealers.vue'
import { selectControl } from '@/tools/stories'

export default {
    title: 'Blanks/Dealers',
    component: Dealers,
    argTypes: {
        view: selectControl(['default', 'modal'])
    }
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: {
        'dealers-component': Dealers
    },
    template: '<dealers-component v-bind="$props" v-on="$listeners"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.decorators = [
    () => ({
        template: '<div style="padding: 20px 35px;background:#333;"><story /></div>'
    })
]
// @ts-ignore
Default.args = {}
