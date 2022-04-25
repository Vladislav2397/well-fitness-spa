<template lang="pug">

.b-sorting
    link-component.__link(
        v-for="(item, index) in filters.list"
        :key="index"
        :theme="filters.active === index ? 'dark' : 'secondary'"
        :icon="currentIcon(index)"
        :icon-left="true"
        @click="onClick(index)"
    ) {{ item }}

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Sorting extends Vue {
    filters = {
        active: 0,
        list: [
            'По популярности',
            'По новизне',
            'По цене',
            'По рейтингу',
        ]
    }

    isUp = false

    currentIcon(index: number): 'sort-up' | 'sort-down' | undefined {
        if (this.filters.active === index) {
            return this.isUp ? 'sort-up' : 'sort-down'
        }
        return undefined
    }

    onClick(index: number): void {
        if (this.filters.active === index) {
            this.isUp = !this.isUp
        } else {
            this.filters.active = index
            this.isUp = false
        }
    }
}

</script>

<style lang="scss" src="./sorting--critical.scss"></style>
<style lang="scss" src="./sorting--main.scss"></style>
