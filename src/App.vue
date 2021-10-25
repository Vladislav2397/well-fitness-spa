<template lang="pug">
#app
    router-view

    .modal-window(
        v-if="!device.size.desktop"
    )
        portal-target(
            name="header-modal-window"
        )
        portal-target(
            name="phone-line"
        )
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import Device from '@/mixins/device'

@Component
export default class App extends Mixins(Device) {}
</script>

<style lang="scss">
@import "./assets/scss/critical";
@import "./assets/scss/main";
</style>
