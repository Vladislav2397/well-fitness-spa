<template lang="pug">

button-component.b-add-to-cart(

)

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {ButtonProps} from "@/shared/ui/Button/Button.vue"

@Component
export default class AddToCart extends Vue {
    get props(): ButtonProps {
        return {
            tag: 'button',
            theme: 'brand',
            icon: 'cart',
            iconLeft: true,
            size: 'm',
            iconSize: 'm',
        }
    }
}
</script>

<style lang="scss" src="./AddToCart.critical.scss" />
<style lang="scss" src="./AddToCart.main.scss" />
