export interface IFormBaseField {
    value: (string | number) | (string | number)[] | null
    error: boolean | boolean[]
    validRegex: RegExp
    optionals?: Record<string, unknown> | unknown
}

export default abstract class FormBaseField<T extends IFormBaseField> {
    value: T['value']
    error!: T['error']
    validRegex: T['validRegex']
    optionals: T['optionals']

    protected constructor(props: T) {
        this.value = props.value
        this.error = props.error
        this.validRegex = props.validRegex
        this.optionals = props.optionals
    }

    abstract get isValid(): boolean
}
