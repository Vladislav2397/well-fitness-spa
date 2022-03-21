import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class FlexProps extends Vue {
    @Prop({ default: 'start' }) readonly justifyContent!:
        | 'start'
        | 'center'
        | 'end'
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
    @Prop({ default: 'start' }) readonly alignItems!:
        | 'start'
        | 'center'
        | 'end'
        | 'stretch'
    @Prop({ default: 'row' }) readonly direction!:
        | 'row'
        | 'row-reverse'
        | 'column'
        | 'column-reverse'
    @Prop() readonly flexGrow!: number[]
}
