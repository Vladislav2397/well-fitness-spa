<template lang="pug">
.home
    carousel-component
    home-equipment-component
    .grid-gym
    .stock
    .ideas
    .brands
    .information
    .about
    .become-partner
    .blog-news
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import Carousel from '@/components/sections/Carousel.vue'
import HomeEquipment from '@/components/sections/HomeEquipment.vue'

@Component({
    components: {
        'home-equipment-component': HomeEquipment,
        'carousel-component': Carousel
    }
})
export default class IndexPage extends Vue {}
</script>
