<template lang="pug">

#app
    header-component(
        @clickBurger="currentModalName = 'header'"
    )

    router-view

    footer-component

    transition(
        name="translate-bottom"
    )
        modal-component(
            v-if="currentModalName === 'header' && !device.size.desktop"
            @clickClose="currentModalName = ''"
        )
            header-modal-component(
                @clickEquipment="currentModalName = 'equipment'"
            )
        modal-component(
            v-else-if="currentModalName === 'equipment' && !device.size.desktop"
            @clickClose="currentModalName = ''"
        )
            equipment-modal-component(
                :title="currentEquipment[0].title"
                :list="currentEquipment[0].list"

                @clickBreadcrumb="currentModalName = 'header'"
            )

</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'

import TheHeader from '@/components/blanks/TheHeader.vue'
import Modal from '@/components/modals/Modal.vue'
import HeaderModal from '@/components/modals/HeaderModal.vue'
import EquipmentModal from '@/components/modals/EquipmentModal.vue'
import TheFooter from '@/components/sections/TheFooter.vue'

import Device from '@/mixins/device'

import { equipmentModalLinkType } from '@/components/modals/EquipmentModal.vue'

type equipmentModalContentType = {
    title: string,
    list: equipmentModalLinkType[]
}

@Component({
    components: {
        'equipment-modal-component': EquipmentModal,
        'header-modal-component': HeaderModal,
        'header-component': TheHeader,
        'footer-component': TheFooter,
        'modal-component': Modal
    }
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
