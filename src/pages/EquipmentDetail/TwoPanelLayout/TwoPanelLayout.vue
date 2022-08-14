<template lang="pug">

.b-two-panel-layout
    .__left
        slot(
            name="left"
        )
    .__right
        slot

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TwoPanelLayout extends Vue {
    //
}
</script>

<style lang="scss" src="./TwoPanelLayout.critical.scss" />
<style lang="scss" src="./TwoPanelLayout.main.scss" />
