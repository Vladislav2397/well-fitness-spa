import FormBaseField, { IFormBaseField } from '@/tools/forms/formBaseField'
import { Vue } from 'vue-property-decorator'

export interface IFormSingleField extends IFormBaseField {
    value: string
    error: boolean
    validRegex: RegExp
    optionals: Record<string, unknown>
    errorText?: () => string
}

export default class FormSingleField extends FormBaseField<IFormSingleField> {
    constructor(props?: Partial<IFormSingleField>) {
        console.log('FormSingleField.constructor()')

        const defaultValues: IFormSingleField = {
            value: '',
            error: false,
            validRegex: /.*/,
            optionals: {} as IFormSingleField['optionals'],
        }

        super({ ...defaultValues, ...props })

        if (props?.errorText) {
            Object.defineProperty(this, 'errorText', {
                get: props.errorText,
            })
        }
    }

    get isValid(): boolean {
        console.log('FormSingleField.isValid')

        return this.validRegex.test(this.value)
    }

    get isFilled(): boolean {
        console.log('FormSingleFilled.isFilled')

        return Boolean(this.value)
    }

    validate(): void {
        console.log('FormSingleField.validate()')

        this.error = !this.isValid
    }

    setErrorText(errorText: () => string): this {
        console.log('FormSingleField.setErrorText()')

        Object.defineProperty(this, 'errorText', {
            get: errorText,
        })

        return this
    }

    get errorText(): string {
        console.log('FormSingleField.errorText')

        if (!this.value) {
            return 'empty value'
        }
        return 'incorrect form'
    }
}
