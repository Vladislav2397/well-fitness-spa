import { ref, getCurrentInstance } from '@vue/composition-api'

interface FormFactoryOptions {
    value: string
    error: boolean
    validRegex: RegExp
    optionals: Record<string, undefined>
}

const useSingleForm = (props?: Partial<FormFactoryOptions>) => {
    const value = ref(props?.value ?? '')
    const error = ref(props?.error ?? false)
    const validRegex = ref(props?.validRegex ?? /.*/)

    const instance = getCurrentInstance()

    const isValid = () => {
        console.log('useSingleForm.isValid')

        return validRegex.value.test(value.value)
    }

    const errorText = () => {
        console.log('useSingleForm.errorText')

        if (!value.value) {
            return 'empty'
        }
        return 'incorrect'
    }

    const validate = () => {
        console.log('useSingleForm.validate()')

        if (!isValid()) {
            error.value = true
        }
    }

    return {
        value,
        error,
        validRegex,
        errorText,
        isValid,
        validate,
        optionals: {
            label: 'Email',
            placeholder: 'Enter email address',
        },
    }
}

export default useSingleForm
