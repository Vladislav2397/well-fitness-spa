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
        c-category-filters.__categories(
            :active.sync="activeCategorySync"
        )
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
                    c-equipment-catalog-card(
                        v-for="id in activeEquipments"
                        :key="id"
                        :class="classItem"
                        :id="id"
                        :to="`${$route.path}/${id}`"
                    )
        template(
            #aside="{ classContainer }"
        )
            .__aside(
                v-if="!device.size.mobile"
                :class="classContainer"
            )
                filter-group-component.__group(
                    v-for="({ title, type, filters }, index) in filterData"
                    :key="index"
                    :title="title"
                )
                    template(
                        #default="{ classItem }"
                    )
                        checkbox-component(
                            v-for="([filterItem, value], index) in filters"
                            :key="index"
                            :value="value"
                            :id="`input${index}${filterItem.name}`"
                            :class="classItem"

                            @input="onCheck(type, filterItem.id, $event)"
                        ) {{ filterItem.name }}
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
import {Component, Inject, Prop, PropSync, Vue} from 'vue-property-decorator'

import CatalogLayout from '@/components/layouts/CatalogLayout.vue'
import Modal from '@/components/modals/Modal.vue'
import FilterModal from '@/components/modals/FilterModal.vue'
import FilterGroup from '@/components/blanks/FilterGroup.vue'
import { EquipmentCatalogCard } from "@/entities/equipment"

import { TilingLayout } from '@/shared/layouts/TilingLayout'
import { Checkbox } from '@/shared/ui/Checkbox'
import { Range } from '@/shared/blanks/Range'
import { Link } from '@/shared/ui/Link'
import { Banner } from '@/shared/blanks/Banner'
import { Sorting } from '@/features/equipment'
import { CategoryFilters } from '@/features/category'
import {
    EquipmentCard,
} from '@/entities/equipment'
import { AsideLayout } from '@/shared/layouts/AsideLayout'
import {Equipment} from "@/entities/equipment"
import {Brand} from "@/entities/brand"

import type { IDevice } from '@/use/device'
import {brandModel} from "@/entities/brand"
import {Model} from "@/shared/config/decorators"
import {Repository} from "@vuex-orm/core"

export enum FilterGroups {
    BRAND = 'brand',
    FUNCTIONALITY = 'functionality',
    PROMOTION = 'promotion',
}

@Component({
    components: {
        'c-equipment-catalog-card': EquipmentCatalogCard,
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

    @Model(Equipment) Equipment!: Repository<Equipment>
    @Model(Brand) Brand!: Repository<Brand>

    @PropSync('activeCategory') activeCategorySync!: string | number
    @Prop() readonly activeIds!: number[]
    @Prop() readonly filters!: {
        [K in FilterGroups]: Set<string>
    }

    onCheck(type: FilterGroups, id: number, value: boolean) {
        const filters = Object.fromEntries(
            Object.entries(this.filters)
                // .filter(([, set]) => set.size)
                .map(([key, set]) => [key, new Set([ ...set ])])
        )

        if (value) {
            filters?.[type].add(`${id}`)
        } else {
            filters?.[type].delete(`${id}`)
        }

        this.$router.replace({
            query: {
                ...Object.fromEntries(
                    Object
                        .entries(filters)
                        .filter(([, set]) => set.size)
                        .map(([key, set]) => [ key, [ ...set ].join(',') ])
                ),
            }
        })
    }

    isModal = false

    get correctFilters() {
        return Object.fromEntries(
            Object.entries(this.filters).map(
                ([key,ids]) => [key, new Set(ids)]
            )
        )
    }

    get filterData() {
        const brands = this.Brand.all()

        return [
            {
                title: 'Производители',
                theme: 'light',
                type: FilterGroups.BRAND,
                filters: brands.map(brand => [
                    brand,
                    this.filters[FilterGroups.BRAND].has(brand?.id ?? 0)
                ])
            },
            {
                title: 'Акции, наличие',
                theme: 'light',
                filters: [
                    [{ name: 'Акция' }, false],
                    [{ name: 'Новинки' }, false],
                    [{ name: 'В наличии' }, false],
                    [{ name: 'Наш выбор' }, false],
                ]
            },
        ]
    }

    filterList = [
        {
            title: 'Производители',
            theme: 'light',
            filters: [
                ['Gym80', false],
                ['CardioPower', false],
                ['Original Fitness', false],
                ['Nautilus', false],
                ['Sole Fitness', false],
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

    mounted() {
        this.filterList[0].filters = this.Brand.all().map(
            brand => [brand.name, false]
        )
    }

    get activeEquipments() {
        return Object.values(this.Equipment
            .query()
            .where(equipment => {
                return equipment.category_id === this.activeCategorySync &&
                    this.activeIds.includes(equipment.id)
            })
            .all()).map(equipment => equipment.id)
    }

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
