<template lang="pug">

#app
    header-component(
        @clickBurger="isModal = true"
    )
    router-view

    footer-component

    transition(
        name="translate-bottom"
    )
        modal-component(
            v-if="isModal && !device.size.desktop"
            @clickClose="isModal = false"
        )
            header-modal-component
        modal-component(
            v-if="isModal && !device.size.desktop"
            @clickClose="isModal = false"
        )
            //-

</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'

import TheHeader from '@/components/blanks/TheHeader.vue'
import Modal from '@/components/modals/Modal.vue'
import HeaderModal from '@/components/modals/HeaderModal.vue'
import TheFooter from '@/components/sections/TheFooter.vue'

import Device from '@/mixins/device'
import Pagination from '@/components/blanks/Pagination.vue'

@Component({
    components: {
        Pagination,
        'header-modal-component': HeaderModal,
        'header-component': TheHeader,
        'footer-component': TheFooter,
        'modal-component': Modal
    }
})
export default class App extends Mixins(Device) {
    isModal = false
}
</script>

<style lang="scss">
@import "./assets/scss/critical";
@import "./assets/scss/main";
</style>
