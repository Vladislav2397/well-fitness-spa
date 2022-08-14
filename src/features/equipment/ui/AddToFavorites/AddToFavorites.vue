<template lang="pug">

link-component.b-add-to-favorites(
    v-bind="bindProps"
) В избранное

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {LinkProps} from "@/shared/ui/Link/Link.vue"

@Component
export default class AddToFavorites extends Vue {
    get bindProps(): LinkProps {
        return {
            tag: 'button',
            iconLeft: true,
            icon: 'heart',
            theme: 'secondary',
            iconSize: 'm'
        }
    }
}
</script>

<style lang="scss" src="./AddToFavorites.critical.scss" />
<style lang="scss" src="./AddToFavorites.main.scss" />
