<template lang="pug">

div.test
    .__container.container
        c-input.__field(
            v-model.trim="email.value.value"
            :error.sync="email.error.value"
            :errorText="email.errorText.value"
            v-bind="email.optionals"
            name="email"
        )
        button-component(
            @click="validate"
        ) Validate

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
// @ts-ignore
import VueInject from 'vue-inject'

import InjectorService from '@/services/InjectorService'

import Input from '@/components/ui/Input.vue'

// import FormSingleField from '@/tools/forms/formSingleField'
import useSingleForm from '@/use/form'
import {Deco, Log} from '@/decorators'

@Component({
    components: {
        'c-input': Input
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
export default class TestPage extends Vue {
    email!: { value: string, error: boolean, optionals: Record<string, unknown>, isValid: boolean, errorText: string, validate: () => void }

    @Log() injectorService!: InjectorService

    mounted() {
        console.log('this.injectorService', this.injectorService)
    }

    validate(): void {
        this.email.validate()
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
