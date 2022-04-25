<template lang="pug">

.b-aside-layout
    .__main
        slot
    slot(
        name="aside"
        :classContainer="'aside-layout__aside'"
    )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AsideLayout extends Vue {

}
</script>

<style lang="scss" src="./aside-layout--critical.scss"></style>
<style lang="scss" src="./aside-layout--main.scss"></style>
