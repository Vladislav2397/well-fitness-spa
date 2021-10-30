<template lang="pug">
include ../../tools/pug/mixins

+b.login-button
    span Войти
    +e.AVATAR-COMPONENT.avatar

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class LoginButton extends Vue {

}

</script>
