<template lang="pug">

.b-login-button(
    @click="openModal"
)
    span Войти
    avatar-component.__avatar

</template>

<script lang="ts" setup>
import {useStore} from '@/shared/hooks/store'

const store = useStore()

const openModal = () => {
    store?.dispatch('modals/openModal', 'login')
}
</script>
