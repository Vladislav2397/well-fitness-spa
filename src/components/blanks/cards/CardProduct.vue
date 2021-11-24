<template lang="pug">

.card-product
    ._image
        img(
            :src="imageSrc"
            :alt="imageAlt"
        )
    ._content
        slot
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CardProduct extends Vue {
    @Prop({ default: '' }) readonly imageSrc!: string
    @Prop({ default: '' }) readonly imageAlt!: string
}

</script>
