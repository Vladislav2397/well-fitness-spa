<template lang="pug">

.b-request-call
    span +7 (800) 800-80-80
    link-component(
        v-if="isNotMobile"

        tag="span"
        icon="collapse"
        iconSize="s"
    ) МСК
    link-component(
        tag="a"
        iconSize="s"
    ) Заказать звонок

</template>

<script lang="ts" setup>
import {computed, inject} from '@vue/composition-api'

import {IDevice} from '@/use/device'

const device = inject<IDevice>('$device')

const isNotMobile = computed(
    () => device?.size.desktop || device?.size.tablet
)
</script>
