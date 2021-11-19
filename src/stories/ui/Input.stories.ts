import Input from '../../components/ui/Input.vue'

export default {
    title: 'Ui/Input',
    component: Input,
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: {'input-component': Input},
    template: '<input-component v-bind="$props" />',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}

const PrefixTemplate = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: {'input-component': Input},
    template: `
        <input-component v-bind="$props">
            <template #prefix>
                <i class="icon icon--size-m icon--search"></i>
            </template>
        </input-component>`,
})

export const Prefix = PrefixTemplate.bind({})
// @ts-ignore
Prefix.args = {}

