import FormSingleField from '@/tools/forms/formSingleField'

describe('FormSingleField', () => {
    describe('default', () => {
        const form = new FormSingleField()

        test('default values', () => {
            expect(form.value).toEqual('')
            expect(form.error).toBeFalsy()
            expect(form.validRegex).toEqual(/.*/)
            expect(form.optionals).toEqual({})
        })

        test('set custom value', () => {
            form.value = 'some'
            expect(form.value).toEqual('some')
        })

        test('set custom error', () => {
            form.error = true
            expect(form.error).toBeTruthy()
        })

        test('set custom validRegex', () => {
            form.validRegex = /\D+/
            expect(form.validRegex).toEqual(/\D+/)
        })

        test('set custom optionals', () => {
            form.optionals.type = 'input'
            expect(form.optionals).toEqual({ type: 'input' })
        })
    })

    describe('default with custom', () => {
        const form = new FormSingleField({
            value: 'some',
            error: true,
            validRegex: /\D+/,
            optionals: {
                type: 'input',
            },
        })

        test('default with custom values', () => {
            expect(form.value).toEqual('some')
            expect(form.error).toBeTruthy()
            expect(form.validRegex).toEqual(/\D+/)
            expect(form.optionals).toEqual({
                type: 'input',
            })
        })
    })

    describe('validate', () => {
        const form = new FormSingleField({
            validRegex: /.+/,
        })

        test('default isValid', () => {
            expect(form.isValid).toBeFalsy()
        })

        test('default validate', () => {
            form.validate()
            expect(form.error).toBeTruthy()
        })

        test('custom isValid', () => {
            form.value = 'some'
            expect(form.isValid).toBeTruthy()
        })

        test('custom validate', () => {
            form.validate()
            expect(form.error).toBeFalsy()
        })
    })

    describe('set error text', () => {
        const form = new FormSingleField({
            validRegex: /.{6,}/,
        }).setErrorText(() => {
            if (!form.value) {
                return 'Fill field'
            } else if (!form.isValid) {
                return 'incorrect form'
            } else {
                return 'unknown error'
            }
        })

        test('default error text', () => {
            expect(form.errorText).toEqual('Fill field')
        })

        test('Not valid error text', () => {
            form.value = 'some'
            expect(form.errorText).toEqual('incorrect form')
        })

        test('Valid error text', () => {
            form.value = 'somebody'
            expect(form.errorText).toEqual('unknown error')
        })
    })
})
