<template lang="pug">

.b-catalog
    c-banner.__banner
    c-link.__link(
        v-if="device.size.mobile"
        :iconLeft="true"
        icon="filter"
        theme="dark"
        @click="isModal = true"
    ) Фильтры
    .__row
        c-category-filters.__categories
        c-sorting.__sorting
    l-aside-layout
        template(
            #default
        )
            tiling-layout-component.__tiling(
                :count-in-row="rowCount"
            )
                template(
                    #default="{ classItem }"
                )
                    c-equipment-card.__card(
                        v-for="(card, index) in cards"
                        :key="index"
                        :class="classItem"
                        :equipmentCard="card"
                    )
        template(
            #aside="{ classContainer }"
        )
            .__aside(
                v-if="!device.size.mobile"
                :class="classContainer"
            )
                filter-group-component.__group(
                    v-for="({ title, filters }, index) in filterList"
                    :key="index"
                    :title="title"
                )
                    template(
                        #default="{ classItem }"
                    )
                        checkbox-component(
                            v-for="([name, value], index) in filters"
                            :key="index"
                            v-model="value"
                            :id="`input${index}${name}`"
                            :class="classItem"
                        ) {{ name }}
                filter-group-component.__group(
                    title="Цена"
                )
                    range-component(
                        :range="[2000, 10000]"
                    )
                filter-group-component.__group
                    button-component(
                        theme="ghost-brand"
                    ) Очистить
    filter-modal-component(
        v-if="device.size.mobile && isModal"

        @close="onCloseModal"
    )

</template>

<script lang="ts">
import {Component, Inject, Vue} from 'vue-property-decorator'

import CatalogLayout from '@/components/layouts/CatalogLayout.vue'
import Modal from '@/components/modals/Modal.vue'
import FilterModal from '@/components/modals/FilterModal.vue'
import FilterGroup from '@/components/blanks/FilterGroup.vue'

import { TilingLayout } from '@/shared/layouts/TilingLayout'
import { Checkbox } from '@/shared/ui/Checkbox'
import { Range } from '@/shared/blanks/Range'
import { Link } from '@/shared/ui/Link'
import { Banner } from '@/shared/blanks/Banner'
import { Sorting } from '@/features/equipment'
import { CategoryFilters } from '@/features/category'
import { EquipmentCard } from '@/entities/equipment'
import { AsideLayout } from '@/shared/layouts/AsideLayout'

import { IDevice } from '@/use/device'
import { Getter } from '@/shared/config'
import { StringNumber } from '@/types/common'

@Component({
    components: {
        'c-link': Link,
        'c-equipment-card': EquipmentCard,
        'c-sorting': Sorting,
        'c-category-filters': CategoryFilters,
        'l-aside-layout': AsideLayout,
        'range-component': Range,
        'checkbox-component': Checkbox,
        'filter-group-component': FilterGroup,
        'filter-modal-component': FilterModal,
        'modal-component': Modal,
        'catalog-layout-component': CatalogLayout,
        'tiling-layout-component': TilingLayout,
        'c-banner': Banner,
    },
})
export default class EquipmentTypeDetail extends Vue {
    @Inject('$device') device!: IDevice

    @Getter('equipment/activeEquipments') activeEquipments!: StringNumber[]
    @Getter('equipment/equipments') equipments!: Record<string, any>

    isModal = false

    get cards(): EquipmentCard['equipmentCard'][] {
        return this.activeEquipments.map(id => this.equipments[id])
    }

    filterList = [
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

    get rowCount(): number {
        if (this.device.size.desktop) return 4
        if (this.device.size.tabletLate) return 3
        return 2
    }

    onCloseModal(): void {
        this.isModal = false
    }
}

</script>

<style lang="scss" src="./catalog--critical.scss"></style>
<style lang="scss" src="./catalog--main.scss"></style>
