<template lang="pug">

router-link.b-card-product(
    to="/equipment/gym/1"
)
    .__image
        img(
            :src="imageSrc"
            :alt="imageAlt"
        )
    .__content
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
