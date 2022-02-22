<template lang="pug">

.page
    c-carousel
    c-home-equipment
    c-gym-equipment
    c-stock
    c-idea
    c-brand
    c-addition
    c-about
    c-become-partner
    c-blog

</template>

<script lang="ts">
import Carousel from '@/components/sections/Carousel/Carousel.vue'
import HomeEquipment from '@/components/sections/HomeEquipment.vue'
import GymEquipment from '@/components/sections/GymEquipment.vue'
import Stock from '@/components/sections/Stock.vue'
import Idea from '@/components/sections/Idea.vue'
import Brand from '@/components/sections/Brand.vue'
import Addition from '@/components/sections/Addition.vue'
import About from '@/components/sections/About.vue'
import BecomePartner from '@/components/sections/BecomePartner.vue'
import Blog from '@/components/sections/Blog.vue'

export default {
    components: {
        'c-carousel': Carousel,
        'c-home-equipment': HomeEquipment,
        'c-gym-equipment': GymEquipment,
        'c-stock': Stock,
        'c-idea': Idea,
        'c-brand': Brand,
        'c-addition': Addition,
        'c-about': About,
        'c-become-partner': BecomePartner,
        'c-blog': Blog,
    }
}
</script>

<script setup lang="ts">
</script>
