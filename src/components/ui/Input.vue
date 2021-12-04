<template lang="pug">

.input(
    :class="classes"
)
    ._label(
        v-if="label"
    )
    label._field
        ._prefix(
            v-if="$slots.prefix"
        )
            slot(
                name="prefix"
            )
        ._value
            input(
                v-model="inputValue"
                :name="name"
                :disabled="disabled"
                autocomplete="false"
            )
            ._placeholder(
                v-if="!inputValue && placeholder"
            ) {{ placeholder }}
        ._postfix(
            v-if="$slots.postfix"
        )
            slot(
                name="postfix"
            )

</template>

<script lang="ts">
import { Component, Prop, VModel, Vue } from 'vue-property-decorator'

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

    get classes(): string[] {
        const classes = []

        if (this.theme) classes.push(`input--theme-${this.theme}`)

        if (this.size) classes.push(`input--size-${this.size}`)

        return classes
    }
}

</script>
