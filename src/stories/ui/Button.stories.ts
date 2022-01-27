import Button from '../../components/ui/Button/Button.vue'
import { booleanControl, selectControl, textControl } from '@/tools/stories'

export default {
    title: 'Ui/Button',
    component: Button,
    argTypes: {
        tag: selectControl(['button', 'a', 'div', 'router-link']),
        size: selectControl(['m', 's']),
        theme: selectControl(['brand', 'ghost-brand', 'ghost', 'secondary']),
        icon: textControl(),
        iconSize: selectControl(['s', 'm', 'l']),
        href: textControl(),
        iconLeft: booleanControl(),
    },
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { 'button-component': Button },
    template: '<button-component v-bind="$props" >Button</button-component>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}

// const TemplateAll = (args: any, { argTypes }: any) => ({
//     props: Object.keys(argTypes),
//     components: {'button-component': Button},
//     template: `
//         <table>
//             <tbody>
//                 <tr>
//                     <td></td>
//                 </tr>
//             </tbody>
//         </table>
//         <button-component v-bind="$props" >Button</button-component>
//     `,
// })
//
// export const All = Template.bind({})
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// All.args = {}
