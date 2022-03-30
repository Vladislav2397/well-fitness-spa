import Flex from './Flex.vue'
import { defineControls } from '@/tools/stories'

export default {
    title: 'Layout/Flex',
    component: Flex,
    argTypes: defineControls({
        justifyContent: [
            'flex-start',
            'center',
            'flex-end',
            'space-between',
            'space-around',
            'space-evenly',
        ],
        alignItems: ['flex-start', 'center', 'flex-end', 'stretch'],
        direction: ['row', 'row-reverse', 'column', 'column-reverse'],
    }),
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { Flex },
    template: `
        <div style="height: 50px;background:#aaa;">
            <Flex style="height: 100%;" v-bind="$props">
                <template v-slot:default="{ slotClass }">
                    <span :class="slotClass" style="background:#ccc;">Title</span>
                    <p :class="slotClass" style="background:#ccc;">Content</p>
                    <p :class="slotClass" style="background:#ccc;">Content</p>
                    <div :class="slotClass" style="background:#ccc;">Badge</div>
                </template>
            </Flex>
        </div>
    `,
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    flexGrow: [1, 1, 1, 1],
}
