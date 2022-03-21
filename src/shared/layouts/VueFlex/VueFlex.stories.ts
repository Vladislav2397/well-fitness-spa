import VueFlex from './VueFlex.vue'
import { defineControls } from '@/tools/stories'

export default {
    title: 'Layout/VueFlex',
    component: VueFlex,
    argTypes: defineControls({
        justifyContent: ['start', 'center', 'end', 'space-between'],
    }),
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { VueFlex },
    template: `
        <VueFlex v-bind="$props">
          <span>Title</span>
          <div>Badge</div>
        </VueFlex>
    `,
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
// @ts-ignore
// Default.parameters = {
//     design: {
//         type: 'figma',
//         url: 'https://www.figma.com/file/Ip0FfiirJVc4nxjyXjgene/WellFitness?node-id=4102%3A68737',
//     },
// }
