<template lang="pug">

.b-modals
    component.__item(
        v-for="(modalName, index) in activeModals"
        :key="index"
        :is="`${modalName}-modal`"
    )

</template>

<script lang="ts" setup>
import {useStore} from '@/shared/hooks/store'

const store = useStore()

const activeModals = store?.getters['modals/getModals']

</script>

<script lang="ts">
import { LoginModal } from '@/shared/modals'

export default {
    components: {
        'login-modal': LoginModal,
    }
}
</script>

<style lang="scss">
.modals {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1a1a2580;
    box-sizing: border-box;
    padding-top: toRem(169);
}
</style>
