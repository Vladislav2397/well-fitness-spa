<template lang="pug">

#app
    header-component(
        @clickBurger="currentModalName = 'header'"
        @clickSearch="currentModalName = 'search'"
        @clickCity="currentModalName = 'city'"
    )

    router-view

    footer-component

    transition(
        name="fade"
    )
        .overlay(
            v-if="currentModalName"
            @click="currentModalName = ''"
        )

    transition(
        :name=" device.size.mobile && !device.size.mobileLate ? 'translate-bottom' : 'translate-right'"
        mode="in-out"
    )
        modal-component(
            v-if="currentModalName === 'header' && !device.size.desktop"
            key="header"
            @clickClose="currentModalName = ''"
        )
            header-modal-component(
                @clickEquipment="currentModalName = 'equipment'"
                @clickCity="currentModalName = 'city'"
            )
        modal-component(
            v-if="currentModalName === 'equipment' && !device.size.desktop"
            key="equipment"
            @clickClose="currentModalName = ''"
        )
            equipment-modal-component(
                :title="currentEquipment[0].title"
                :list="currentEquipment[0].list"

                @clickBreadcrumb="currentModalName = 'header'"
            )
        modal-component(
            v-if="currentModalName === 'city'"
            key="city"
            theme="light"
            @clickClose="currentModalName = ''"
        )
            city-modal-component
        modal-component(
            v-if="currentModalName === 'search'"
            key="city"
            theme="light"
            @clickClose="currentModalName = ''"
        )
            search-content-component

</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'

import TheHeader from '@/components/blanks/TheHeader.vue'
import Modal from '@/components/modals/Modal.vue'
import HeaderModal from '@/components/modals/HeaderModal.vue'
import EquipmentModal, {
    equipmentModalLinkType
} from '@/components/modals/EquipmentModal.vue'
import TheFooter from '@/components/sections/TheFooter.vue'

import Device from '@/mixins/device'
import CityModal from '@/components/modals/CityModal.vue'
import SearchContent from '@/components/sections/SearchContent.vue'

type equipmentModalContentType = {
    title: string,
    list: equipmentModalLinkType[]
}

@Component({
    components: {
        'search-content-component': SearchContent,
        'city-modal-component': CityModal,
        'equipment-modal-component': EquipmentModal,
        'header-modal-component': HeaderModal,
        'header-component': TheHeader,
        'footer-component': TheFooter,
        'modal-component': Modal
    },
})
export default class App extends Mixins(Device) {
    isModal = false

    currentModalName = ''

    currentEquipment: equipmentModalContentType[] = [
        {
            title: 'Для дома',
            list: [
                {
                    text: 'Кардиотренажеры',
                    href: '/',
                },
                {
                    text: 'Силовые тренажеры',
                    href: '/',
                },
                {
                    text: 'Уличные виды спорта',
                    href: '/',
                },
                {
                    text: 'Свободные веса',
                    href: '/',
                },
                {
                    text: 'Игровые столы',
                    href: '/',
                },
                {
                    text: 'Массажное оборудование',
                    href: '/',
                },
                {
                    text: 'Фитнес аксессуары',
                    href: '/',
                },
                {
                    text: 'Функциональный тренинг',
                    href: '/',
                },
            ]
        },
        {
            title: 'Для фитнес клубов',
            list: [
                {
                    text: 'Функциональный тренинг',
                    href: '/',
                },
                {
                    text: 'Фитнес аксессуары',
                    href: '/',
                },
                {
                    text: 'Массажное оборудование',
                    href: '/',
                },
                {
                    text: 'Игровые столы',
                    href: '/',
                },
                {
                    text: 'Свободные веса',
                    href: '/',
                },
                {
                    text: 'Уличные виды спорта',
                    href: '/',
                },
                {
                    text: 'Силовые тренажеры',
                    href: '/',
                },
                {
                    text: 'Кардиотренажеры',
                    href: '/',
                },
            ],
        }
    ]
}
</script>

<style lang="scss">
@import "./assets/scss/critical";
@import "./assets/scss/main";
</style>
