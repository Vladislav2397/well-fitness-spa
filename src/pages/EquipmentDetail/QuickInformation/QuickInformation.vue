<template lang="pug">

.b-quick-information
    section.__section.-bordered
        .__panel
            .__image
                img
        .__panel
            //promotion-icon-component
    section.__section
        .__panel(
            v-if="!$device.size.mobile"
        )
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
    section.__section(
        v-if="!$device.size.mobile"
    )
        c-configuration.configure-component
    section.__section
        .__panel
            c-rating-card
        .__panel(
            v-if="!$device.size.mobile"
        )
            c-delivery-information

</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'

import { AddToCompare, AddToFavorites } from '@/features/equipment'
import { EquipmentInformationCard, Characteristics } from '@/entities/equipment'
import { Configuration } from '../Configuration'
import { RatingCard } from '../RatingCard'
import { DeliveryInformation } from '../DeliveryInformation'
import { IDevice } from '@/use/device'

@Component({
    components: {
        'c-delivery-information': DeliveryInformation,
        'c-rating-card': RatingCard,
        'c-configuration': Configuration,
        'c-equipment-information-card': EquipmentInformationCard,
        'c-add-to-compare': AddToCompare,
        'c-add-to-favorites': AddToFavorites,
        'c-characteristics': Characteristics,
    },
})
export default class QuickInformation extends Vue {
    @Inject('$device') $device!: IDevice

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
