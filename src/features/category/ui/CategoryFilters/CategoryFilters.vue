<template lang="pug">

row-layout-component.b-tag-group(
    :overflow="device.size.mobile ? 'scroll' : 'wrap'"
)
    button-component.__tag(
        v-for="(item, index) in categories"
        :key="index"
        :theme="isActive(item.id) ? 'brand' : 'secondary'"
        size="s"
        @click="onClick(item.id)"
    ) {{ item.name }}

</template>

<script lang="ts">
import {Component, Vue, Inject, PropSync} from 'vue-property-decorator'

import RowLayout from '@/components/layouts/RowLayout.vue'
import type { IDevice } from '@/use/device'
import { EquipmentCategory } from '@/entities/equipment'
import {Model} from "@/shared/config/decorators"
import {Repository} from "@vuex-orm/core"

@Component({
    components: {
        'row-layout-component': RowLayout
    }
})
export default class CategoryFilters extends Vue {
    @Inject('$device') device!: IDevice

    @Model(EquipmentCategory) EquipmentCategory!: Repository<EquipmentCategory>

    @PropSync('active') activeSync!: string | number

    get activeFamily(): string {
        return this.$route.params?.family ?? '1'
    }

    get categories()/*: { id: string, name: string }[]*/ {
        return this.EquipmentCategory
            .query()
            .where('family_id', this.activeFamily)
            .all()
    }

    isActive(id: number | string): boolean {
        return `${id}` === `${this.activeSync}`
    }

    onClick(id: number | string): void {
        console.log('onClick setActiveCategory', id)
        this.activeSync = id
    }
}

</script>
