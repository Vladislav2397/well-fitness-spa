import VueGrid from '../../components/blanks/VueGrid.vue'

export default {
    title: 'Blanks/VueGrid',
    component: VueGrid,
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { 'vue-grid-component': VueGrid },
    template: '<vue-grid-component v-bind="$props"></vue-grid-component>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
// @ts-ignore
Default.parameters = {
    docs: {
        source: {
            code: `
                <div style="min-width:100px;min-height:100px;background: #f00;display:inline-block;"></div>
                <div style="min-width:100px;min-height:100px;background: #f00;display:inline-block;"></div>
                <div style="min-width:100px;min-height:100px;background: #f00;display:inline-block;"></div>
                <div style="min-width:100px;min-height:100px;background: #f00;display:inline-block;"></div>
                <div style="min-width:100px;min-height:100px;background: #f00;display:inline-block;"></div>
                <div style="min-width:100px;min-height:100px;background: #f00;display:inline-block;"></div>
                <div style="min-width:100px;min-height:100px;background: #f00;display:inline-block;"></div>
                <div style="min-width:100px;min-height:100px;background: #f00;display:inline-block;"></div>
                <div style="min-width:100px;min-height:100px;background: #f00;display:inline-block;"></div>
                <div style="min-width:100px;min-height:100px;background: #f00;display:inline-block;"></div>
            `
        }
    }
}
