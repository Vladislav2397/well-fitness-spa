import { Vue } from 'vue-property-decorator'

interface FormFactoryOptions {
    value: string
    error: boolean
    validRegex: RegExp
    optionals: Record<string, undefined>
}

function formFactory(props?: Partial<FormFactoryOptions>) {
    const defaultValue: FormFactoryOptions = {
        value: '',
        error: false,
        validRegex: /.+/,
        optionals: {},
    }

    const options = { ...defaultValue, ...props }

    return Vue.observable({
        ...options,
        isValid() {
            console.log('formFactory.isValid')

            return this.validRegex.test(this.value)
        },
        get errorText() {
            console.log('formFactory.errorText')

            if (!this.value) {
                return 'empty field'
            }
            return 'not valid field'
        },
        validate() {
            console.log('formFactory.validate')

            if (this.isValid()) {
                this.error = true
            }
        },
    })
}

export default formFactory
