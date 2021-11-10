<template lang="pug">
.home
    carousel-component
    home-equipment-component
    gym-equipment-component
    stock-component
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
import GymEquipment from '@/components/sections/GymEquipment.vue'
import Stock from '@/components/sections/Stock.vue'

@Component({
    components: {
        'carousel-component': Carousel,
        'home-equipment-component': HomeEquipment,
        'gym-equipment-component': GymEquipment,
        'stock-component': Stock,
    }
})
export default class IndexPage extends Vue {}
</script>
