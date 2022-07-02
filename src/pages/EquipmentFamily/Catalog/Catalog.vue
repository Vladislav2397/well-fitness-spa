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

import { CatalogLayout } from '../CatalogLayout'
import { FilterGroup } from '../FilterGroup'
import Modal from '@/components/modals/Modal.vue'
import FilterModal from '@/components/modals/FilterModal.vue'

import {
    Equipment,
    EquipmentCard,
    EquipmentCatalogCard,
} from '@/entities/equipment'
import { TilingLayout } from '@/shared/layouts/TilingLayout'
import { Checkbox } from '@/shared/ui/Checkbox'
import { Range } from '@/shared/blanks/Range'
import { Link } from '@/shared/ui/Link'
import { Banner } from '@/shared/blanks/Banner'
import { Sorting } from '@/features/equipment'
import { CategoryFilters } from '@/features/category'
import { AsideLayout } from '@/shared/layouts/AsideLayout'
import {Brand} from "@/entities/brand"

import type { IDevice } from '@/use/device'
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
export default class Catalog extends Vue {
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

    mounted(): void {
        this.filterList[0].filters = this.Brand.all().map(
            brand => [brand.name, false]
        )
    }

    get activeEquipments(): Equipment['id'][] {
        return Object.values(this.Equipment
            .query()
            .where(equipment => {
                return this.activeIds.includes(equipment.id)
            })
            .get()).map(equipment => equipment.id)
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
