<template lang="pug">
.home
    carousel-component
    home-equipment-component
    gym-equipment-component
    stock-component
    idea-component
    brand-component
    addition-component
    .b-about
        ._item
    .become-partner
    .blog-news
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import Carousel from '@/components/sections/Carousel.vue'
import HomeEquipment from '@/components/sections/HomeEquipment.vue'
import GymEquipment from '@/components/sections/GymEquipment.vue'
import Stock from '@/components/sections/Stock.vue'
import Idea from '@/components/sections/Idea.vue'
import Brand from '@/components/sections/Brand.vue'
import Addition from '@/components/sections/Addition.vue'

@Component({
    components: {
        'addition-component': Addition,
        'carousel-component': Carousel,
        'home-equipment-component': HomeEquipment,
        'gym-equipment-component': GymEquipment,
        'stock-component': Stock,
        'idea-component': Idea,
        'brand-component': Brand,
    }
})
export default class IndexPage extends Vue {}
</script>
