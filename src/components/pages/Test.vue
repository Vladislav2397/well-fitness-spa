<template lang="pug">

div.test
    .__container.container
        c-input.__field(
            v-model="form.email.value"
            :error.sync="form.email.error"
            :errorText="form.email.errorText"
            v-bind="form.email.optionals"
            name="email"
        )
        c-input.__field(
            v-model="form.password.value"
            :error.sync="form.password.error"
            :errorText="form.password.errorText"
            v-bind="form.password.optionals"
            name="password"
        )
        //c-input._field(
        //    v-model="input.value"
        //    :error.sync="phoneError"
        //    :label="input.label"
        //    :placeholder="input.placeholder"
        //    :errorText="phoneErrorText"
        //    name="phone"
        //)
        button-component(
            @click="validate"
        ) Validate

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

import Input from '@/components/ui/Input.vue'

import FormSingleField from '@/tools/forms/formSingleField'

@Component({
    components: {
        'c-input': Input
    }
})
export default class TestPage extends Vue {
    form = {
        email: new FormSingleField({
            validRegex: /^\S+@\S+\.\S{2,}$/,
            optionals: {
                label: 'Email',
                placeholder: 'input email address'
            },
            errorText: this.errorText,
        }),
        password: new FormSingleField({
            validRegex: /^.{6,}$/,
            optionals: {
                label: 'Password',
                placeholder: 'input password'
            },
            errorText: this.phoneErrorText,
        }),
    }

    // input = {
    //     value: '',
    //     error: false,
    //     label: 'Phone',
    //     placeholder: 'Enter a phone',
    // }

    // get phoneErrorText() {
    //     console.log('Test.phoneErrorText')
    //
    //     if ( !this.input.value) {
    //         return 'empty field'
    //     } else if ( !/\d{4,}/.test(this.input.value)) {
    //         return 'not valid'
    //     }
    //     return 'unknown'
    // }

    // get phoneError() {
    //     console.log('Test.phoneError')
    //
    //     return this.input.error
    // }

    // get isPhoneFilled() {
    //     console.log('Test.isPhoneFilled')
    //
    //     return Boolean(this.input.value)
    // }

    errorText(): string {
        console.log('Test.errorText')

        if ( !this.form.email.value) {
            return 'empty field'
        }
        return 'not valid'
    }

    phoneErrorText(): string {
        console.log('Test.phoneErrorText')

        if ( !this.form.password.value) {
            return 'empty field'
        }
        return 'not valid'
    }

    validate(): void {
        Object.entries(this.form).forEach(([, form]) => {
            form.validate()
        })

        // if ( !this.input.value || !/\d{4,}/.test(this.input.value)) {
        //     this.input.error = true
        // }
    }

    updated(): void {
        console.log('update')
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
