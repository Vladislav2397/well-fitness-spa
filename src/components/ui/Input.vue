<template lang="pug">

.input(
    :class="classes"
)
    ._label
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

@Component
export default class Input extends Vue {
    @VModel({ type: String }) inputValue!: string

    @Prop({ default: 'light' }) readonly theme!: 'light' | 'dark'

    @Prop() readonly placeholder!: string

    @Prop() readonly name!: string

    @Prop() readonly disabled!: boolean

    get classes(): string[] {
        const classes = []

        if (this.theme) classes.push(`input--theme-${this.theme}`)

        return classes
    }
}

</script>
