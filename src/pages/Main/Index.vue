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
import { Carousel } from '@/pages/Main/sections/Carousel'
import { HomeEquipment, GymEquipment } from './sections'
import Stock from '@/components/sections/Stock.vue'
import { Idea } from './sections/idea'
import { Brand } from './sections/Brand'
import { Addition } from './sections/addition'
import { About } from './sections/About'
import { BecomePartner } from './sections/BecomePartner'
import { Blog } from '@/shared/blanks/Blog'

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
