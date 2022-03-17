<template lang="pug">

div.test
    .__container.container
        c-hoc(
            ref="hoc"
            :binding="hocProps"
            :validRegex="inputField.validRegex"
        )
        button-component(
            @click="validate"
        ) Validate
        c-form

</template>

<script lang="ts">
import {Component, Mixins, Ref} from 'vue-property-decorator'

import Input from '@/components/ui/Input.vue'

import useSingleForm from '@/use/form'
import TestServiceProvider from '@/mixins/serviceProviders/testServiceProvider'
import Form from '@/components/pages/Form.vue'
import {Action, Getter} from '@/shared/config/decorators'
import FormSingleField from '@/tools/forms/formSingleField'
import Hoc from '@/shared/hoc/hoc.vue'

@Component({
    components: {
        'c-hoc': Hoc,
        'c-input': Input,
        'c-form': Form,
    },
    setup() {
        const formState = useSingleForm({
            validRegex: /.{4,}/
        })

        return {
            email: {
                value: formState.value,
                error: formState.error,
                validRegex: formState.validRegex,
                optionals: formState.optionals,
                errorText: formState.errorText,
                isValid: formState.isValid,
                validate: formState.validate,
            }
        }
    }
})
export default class TestPage extends Mixins(TestServiceProvider) {
    @Getter('purchase/fields') storeFields!: Record<string, string>

    @Action('purchase/changeValue')
    changeValue!: ({field, value}: {field:string, value: string}) => Promise<void>

    @Ref('hoc') hocRef!: Hoc

    // changeValue(field, value) {
    //     console.log('changeValue', field, value)
    //     this.$store.dispatch('purchase/changeValue', {field, value})
    // }

    hocProps = {
        placeholder: 'hoc placeholder',
    }

    inputField = {
        value: '',
        error: false,
        component: 'input',
        validRegex: /.+/,
        binding: {
            placeholder
        },
    }

    fields: Record<string, FormSingleField> = {}

    email!: {
        value: string
        error: boolean
        optionals: Record<string, unknown>
        isValid: boolean
        errorText: string
        validate: () => void
    }

    createFields(): Record<string, FormSingleField> {
        const result: Record<string, FormSingleField> = {}

        Object.entries(this.storeFields).forEach(([key, value]) => {
            result[key] = new FormSingleField({
                value: this.storeFields[key],
            })
        })

        console.log(result)

        return result
    }

    mounted(): void {
        this.fields = this.createFields()
    }

    validate(): void {
        this.hocRef?.validate()
        console.log('hoc validRegex', this.hocRef?.validRegex)
    }
}
</script>

<style lang="scss" scoped>
.test {
    &__container {
        margin-top: 30px;
        margin-bottom: 30px;
    }

    &__field {
        & + & {
            margin-top: 20px;
        }
    }
}
</style>
