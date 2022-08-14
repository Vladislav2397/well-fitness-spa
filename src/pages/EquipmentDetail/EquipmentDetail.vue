<template lang="pug">

    .b-equipment-detail
        .container
            two-panel-layout
                template(
                    #left
                )
                    c-preview-slider
                template(
                    #default
                )
                    c-quick-information

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

import {TwoPanelLayout} from "./TwoPanelLayout"
import {QuickInformation} from "./QuickInformation"
import {PreviewSlider} from "./PreviewSlider"

@Component({
    components: {
        'c-quick-information': QuickInformation,
        'two-panel-layout': TwoPanelLayout,
        'c-preview-slider': PreviewSlider,
    }
})
export default class EquipmentDetail extends Vue {
    //
}
</script>

<style lang="scss" src="./EquipmentDetail.critical.scss"/>
<style lang="scss" src="./EquipmentDetail.main.scss"/>
