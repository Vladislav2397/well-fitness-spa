<template lang="pug">

row-layout-component.b-tag-group(
    :overflow="device.size.mobile ? 'scroll' : 'wrap'"
)
    button-component.__tag(
        v-for="(item, index) in list"
        :key="index"
        :theme="isActive(item.id) ? 'brand' : 'secondary'"
        size="s"
        @click="onClick(item.id)"
    ) {{ item.name }}

</template>

<script lang="ts">
import {Component, Vue, Inject} from 'vue-property-decorator'

import RowLayout from '@/components/layouts/RowLayout.vue'
import { IDevice } from '@/use/device'
import { Action, Getter } from '@/shared/config'
// import { categoryModel } from '@/entities/category'

@Component({
    components: {
        'row-layout-component': RowLayout
    }
})
export default class CategoryFilters extends Vue {
    @Inject('$device') device!: IDevice

    @Getter('equipment/families') families!: any
    @Getter('equipment/categories') categories!: any
    @Getter('equipment/activeCategory') activeCategory!: string

    @Action('equipment/setActiveCategory') setActiveCategory!: (id: string) => void

    // categoryStore = categoryModel.useStore()

    get activeFamily(): string {
        return this.$route.params?.family ?? '1'
    }

    mounted(): void {
        if (this.list[0]?.id) {
            this.setActiveCategory(this.list[0]?.id)
        }
    }

    get list(): { id: string, name: string }[] {
        if (this.families[this.activeFamily]) {
            // this.setActiveCategory(this.families[this.activeFamily].categories[0])

            return this.families[this.activeFamily].categories.map(
                id => this.categories[id]
            )
        }
        return []
    }

    isActive(id: string): boolean {
        return id.toString() === this.activeCategory.toString()
    }

    onClick(id: string): void {
        console.log('onClick setActiveCategory', id)
        this.setActiveCategory(id)
    }
}

</script>
