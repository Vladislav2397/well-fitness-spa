<template lang="pug">

.modal(
    :class="classes"
)
    ._close(

        v-on:click="clickCloseEmit"
    )
        i.icon.icon--size-s.icon--close
    slot

</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Modal extends Vue {
    @Prop({ default: 'dark' }) readonly theme!: 'light' | 'dark'

    @Emit('clickClose') clickCloseEmit (): void {/**/}

    get classes (): string[] {
        const classes = []

        if (this.theme) classes.push(`modal--theme-${this.theme}`)

        return classes
    }
}
</script>
