<template lang="pug">

.b-login-button(
    @click="openModal"
)
    span Войти
    avatar-component.__avatar

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class LoginButton extends Vue {
    openModal(): void {
        const store = useStore()

        store?.dispatch('modals/openModal', 'login')
    }
}
import {useStore} from '@/shared/hooks/store'
</script>
