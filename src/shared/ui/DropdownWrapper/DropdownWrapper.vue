<template lang="pug">

.b-dropdown-wrapper(
    v-click-outside="closeDropdown"
)
    .__target(
        ref="target"
        v-on:click="onClick"
    )
        slot
    .__content(
        v-if="$slots.content && props.value"
    )
        slot(
            name="content"
        )

</template>

<script lang="ts" setup>

import {defineEmits, defineProps, withDefaults} from '@vue/runtime-dom'

const props = withDefaults(
    defineProps<{
        value: boolean
    }>(),
    {
        value: false,
    }
)

const emit = defineEmits<{
    (e: 'input', value: boolean): void
}>()

const onClick = () => emit('input', !props.value)
const closeDropdown = () => emit('input', false)

</script>

<script lang="ts">
export default {
    name: 'DropdownWrapper'
}
</script>

<style lang="scss">
.dropdown-wrapper {
    position: relative;

    &__content {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
    }
}
</style>
