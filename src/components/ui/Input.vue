<template lang="pug">
    include ../../tools/pug/mixins

    +b.LABEL.input
        +e.prefix
            slot(
                name="prefix"
            )
        +e.field
            input(
                v-model="inputValue"
                :name="name"
                :placeholder="placeholder"
                :disabled="disabled"
            )
        +e.placeholder
        +e.postfix
            slot(
                name="postfix"
            )

</template>

<script lang="ts">
import { Component, Prop, VModel, Vue } from 'vue-property-decorator'

@Component
export default class Input extends Vue {
    @VModel({ type: String }) inputValue!: string

    @Prop() readonly placeholder!: string

    @Prop() readonly name!: string

    @Prop() readonly disabled!: boolean
}

</script>
