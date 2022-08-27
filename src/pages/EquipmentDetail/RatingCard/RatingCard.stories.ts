import RatingCard from './RatingCard.vue'

export default {
    title: 'RatingCard',
    component: RatingCard,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {RatingCard},
    methods: {},
    template: '<RatingCard v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
