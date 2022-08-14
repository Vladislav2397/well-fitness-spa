<template lang="pug">

.b-quick-information
    section.__section.-bordered
        .__panel
            .__image
                img
        .__panel
            //promotion-icon-component
    section.__section
        .__panel
            c-add-to-favorites.__button
            c-add-to-compare.__button.-to-compare
            c-characteristics.__characteristics(
                :list="characteristics"
            )
            link-component(
                tag="button"
                theme="brand",
            ) Все характеристики
        .__panel
            c-equipment-information-card
    section.__section
    section.__section

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import {Characteristics} from "@/entities/equipment"
import AddToFavorites
    from "@/features/equipment/ui/AddToFavorites/AddToFavorites.vue"
import AddToCompare from "@/features/equipment/ui/AddToCompare/AddToCompare.vue"
import EquipmentInformationCard
    from "@/entities/equipment/ui/EquipmentInformationCard/EquipmentInformationCard.vue"

@Component({
    components: {
        'c-equipment-information-card': EquipmentInformationCard,
        'c-add-to-compare': AddToCompare,
        'c-add-to-favorites': AddToFavorites,
        'c-characteristics': Characteristics,
    }
})
export default class QuickInformation extends Vue {
    characteristics: Characteristics['list'] = [
        {
            name: 'Тип дорожки',
            value: 'Домашняя',
        },
        {
            name: 'Тип дорожки',
            value: 'Домашняя',
        },
        {
            name: 'Тип дорожки',
            value: 'Домашняя',
        },
        {
            name: 'Тип дорожки',
            value: 'Домашняя',
        },
        {
            name: 'Тип дорожки',
            value: 'Домашняя',
        },
    ]
}
</script>

<style lang="scss" src="./QuickInformation.critical.scss" />
<style lang="scss" src="./QuickInformation.main.scss" />
