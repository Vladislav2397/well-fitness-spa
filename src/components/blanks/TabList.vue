<template lang="pug">
.b-tab-list
    tab-component.__item(
        v-for="(tab, index) in list"
        :key="index"
        :value="activeIndex === index"

        @input="updateActiveIndex(index)"
    ) {{ tab }}

</template>

<script lang="ts">
import { Component, Prop, VModel, Vue } from 'vue-property-decorator'

import Tab from '@/components/ui/Tab.vue'

@Component({
    components: {
        'tab-component': Tab
    }
})
export default class TabList extends Vue {
    @Prop() readonly list!: string[]

    @VModel() activeIndex!: number

    updateActiveIndex (index: number) {
        this.activeIndex = index
    }
}

</script>
