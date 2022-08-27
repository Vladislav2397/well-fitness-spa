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
        .__content
            c-tab-list(
                v-model="item"
                :list="list"
            )
            c-description-tab
            c-characteristics-preview

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { TwoPanelLayout } from './TwoPanelLayout'
import { QuickInformation } from './QuickInformation'
import { PreviewSlider } from './PreviewSlider'
import TabList from '@/components/blanks/TabList.vue'
import { DescriptionTab } from './tabs/DescriptionTab'
import { CharacteristicsPreview } from './CharacteristicsPreview'

@Component({
    components: {
        'c-characteristics-preview': CharacteristicsPreview,
        'c-description-tab': DescriptionTab,
        'c-tab-list': TabList,
        'c-quick-information': QuickInformation,
        'two-panel-layout': TwoPanelLayout,
        'c-preview-slider': PreviewSlider,
    },
})
export default class EquipmentDetail extends Vue {
    item = ''

    list = [
        'Описание',
        'Характеристики',
        'Отзывы',
        'Доставка и оплата',
        'Рассрочка',
    ]
}
</script>

<style lang="scss" src="./EquipmentDetail.critical.scss" />
<style lang="scss" src="./EquipmentDetail.main.scss" />
