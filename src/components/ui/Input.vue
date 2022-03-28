<template lang="pug">

.b-input(
    :class="classes"
)
    .__label(
        v-if="label"
    )
    label.__field
        .__prefix(
            v-if="$slots.prefix"
        )
            slot(
                name="prefix"
            )
        .__value
            input(
                :value="inputValue"
                :name="name"
                :disabled="disabled"
                v-on:input="onInput"
                autocomplete="false"
            )
            .__placeholder(
                v-if="!inputValue && placeholder"
            ) {{ placeholder }}
        .__postfix(
            v-if="$slots.postfix"
        )
            slot(
                name="postfix"
            )
    .__description(
        v-if="errorSync && errorText"
    ) {{ errorText }}

</template>

<script lang="ts">
import {
    Component,
    Prop,
    PropSync,
    VModel,
    Vue
} from 'vue-property-decorator'

// FIXME: Upgrade two-way binding

type inputThemePropType =
    | 'light'
    | 'dark'
    | 'transparent'

@Component
export default class Input extends Vue {
    @VModel({ type: [String, Number] }) inputValue!: string | number

    @Prop({ default: 'light' }) readonly theme!: inputThemePropType
    @Prop({ default: 'base' }) readonly size!: 'base' | 'inherit'
    @Prop() readonly textSize!: 'p3' | 'p4'
    @Prop() readonly placeholder!: string
    @Prop() readonly name!: string
    @Prop() readonly label!: string
    @Prop() readonly disabled!: boolean
    @Prop() readonly errorText!: string

    @PropSync('error') errorSync?: boolean

    get classes(): string[] {
        const classes = []

        if (this.theme) classes.push(`input--theme-${this.theme}`)
        if (this.size) classes.push(`input--size-${this.size}`)
        if (this.errorSync) classes.push('input--error')

        return classes
    }

    onInput(event: KeyboardEvent): void {
        // @ts-ignore
        this.inputValue = event.target?.value

        if (this.errorSync) {
            this.errorSync = false
        }
    }
}

</script>
