<template lang="pug">

modal-component.filter-modal(
    :has-padding="false"
    theme="light"
    @clickClose="closeEmit"
)
    ._top
        link-component._back Назад
        span Фильтр
    ._group(
        v-for="({ title, theme, filters }, index) in list"
        :key="index"
        :class="`filter-modal__group--theme-${theme}`"
    )
        ._title {{ title }}
        checkbox-component._item(
            v-for="([name, value], idx) in filters"
            :key="idx"
            :id="`input${index}${idx}`"
            v-model="value"
        ) {{ name }}
    ._group
        ._title Цена
        range-component(
            :range="[2000, 10000]"
        )


</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator'

import Checkbox from '@/components/ui/Checkbox.vue'
import Modal from '@/components/modals/Modal.vue'
import Range from '@/components/ui/Range.vue'

@Component({
    components: {
        'range-component': Range,
        'checkbox-component': Checkbox,
        'modal-component': Modal,
    }
})
export default class FilterModal extends Vue {
    // @Prop() readonly list!: {
    //     title: string,
    //     filters: []
    // }[]
    @Emit('close') closeEmit() {/**/}

    list = [
        {
            title: 'Тип тренажера',
            theme: 'secondary',
            filters: [
                ['Беговые дорожки', false],
                ['Эллиптические', true],
                ['Велотренажеры', false],
                ['Cтепперы', true],
                ['Горнолыжные', true],
                ['Гребные тренажеры', false],
            ]
        },
        {
            title: 'Производители',
            theme: 'light',
            filters: [
                ['Gym80', false],
                ['CardioPower', true],
                ['Original Fitness', false],
                ['Nautilus', true],
                ['Sole Fitness', true],
                ['Nautilus', false],
            ]
        },
        {
            title: 'Функциональность',
            theme: 'light',
            filters: [
                ['Самые продвинутые', false],
                ['Компактные', false],
                ['С моб. приложением', false],
            ]
        },
        {
            title: 'Акции, наличие',
            theme: 'light',
            filters: [
                ['Акция', false],
                ['Новинки', false],
                ['В наличии', false],
                ['Наш выбор', false],
            ]
        },
    ]
}

</script>
