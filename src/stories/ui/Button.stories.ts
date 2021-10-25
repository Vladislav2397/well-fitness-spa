import Button from '../../components/ui/Button.vue'

export default {
    title: 'Ui/Button',
    component: Button,
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: {'button-component': Button},
    template: '<button-component v-bind="$props" >Button</button-component>',
})

export const Default = Template.bind({})
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
