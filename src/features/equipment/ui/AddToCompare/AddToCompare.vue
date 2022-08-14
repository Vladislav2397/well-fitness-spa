<template lang="pug">

link-component.b-add-to-compare(
    v-bind="bindProps"
) В сравнение

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {LinkProps} from "@/shared/ui/Link/Link.vue"

@Component
export default class AddToCompare extends Vue {
    get bindProps(): LinkProps {
        return {
            tag: 'button',
            iconLeft: true,
            icon: 'stats',
            theme: 'secondary',
            iconSize: 'm'
        }
    }
}
</script>

<style lang="scss" src="./AddToCompare.critical.scss" />
<style lang="scss" src="./AddToCompare.main.scss" />
