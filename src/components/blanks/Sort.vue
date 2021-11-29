<template lang="pug">

.sort
    link-component._link(
        v-for="(item, index) in list"
        :key="index"
        :theme="activeIndex === index ? 'dark' : 'secondary'"
        :icon="currentIcon(index)"
        :icon-left="true"
        @click="onClick(index)"
    ) {{ item }}
    
</template>

<script lang="ts">
import { Component, Prop, VModel, Vue } from 'vue-property-decorator'

@Component
export default class Sort extends Vue {
    @VModel() activeIndex!: number

    @Prop() readonly list!: string[]

    isUp = false

    currentIcon(index: number): 'sort-up' | 'sort-down' | undefined {
        if (this.activeIndex === index) {
            return this.isUp ? 'sort-up' : 'sort-down'
        }
        return undefined
    }

    onClick(index: number) {
        if (this.activeIndex === index) {
            this.isUp = !this.isUp
        } else {
            this.activeIndex = index
            this.isUp = false
        }
    }
}

</script>
