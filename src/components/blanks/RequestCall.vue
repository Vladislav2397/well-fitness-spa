<template lang="pug">
    include ../../tools/pug/mixins

    +b.request-call
        span +7 (800) 800-80-80
        link-component(
            v-if="device.size.desktop || device.size.tablet"
            tag="span"
            icon="collapse"
            iconSize="s"
        ) МСК
        link-component(
            tag="a"
            iconSize="s"
        ) Заказать звонок

</template>

<script lang="ts">
import { Component, Mixins, Vue } from 'vue-property-decorator'
import Device from '@/mixins/device'

@Component
export default class RequestCall extends Mixins(Device) {}
</script>
