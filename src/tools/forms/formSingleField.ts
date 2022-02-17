import FormBaseField, { IFormBaseField } from '@/tools/forms/formBaseField'
import { Vue } from 'vue-property-decorator'

export interface IFormSingleField<T> extends IFormBaseField {
    value: string
    error: boolean
    validRegex: RegExp
    optionals: T & Record<string, unknown>
    errorText?: () => string
}

export default class FormSingleField<T> extends FormBaseField<
    IFormSingleField<T>
> {
    observer

    constructor(props?: Partial<IFormSingleField<T>>) {
        console.log('FormSingleField.constructor()')

        const defaultValues: IFormSingleField<T> = {
            value: '',
            error: false,
            validRegex: /.*/,
            optionals: {} as IFormSingleField<T>['optionals'],
        }

        super({ ...defaultValues, ...props })

        if (props?.errorText) {
            Object.defineProperty(this, 'errorText', {
                get: props.errorText,
            })
        }

        this.observer = Vue.observable({
            ...defaultValues,
            ...props,
            get isValid() {
                // @ts-ignore
                return this.validRegex.test(this.value)
            },
            validate() {
                if (!this.isValid) {
                    this.error = true
                }
            },
        })
    }

    getObserver() {
        return this.observer
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
