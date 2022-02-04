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
// FIXME: Replace all components bem on b-block
import { Component, Vue } from 'vue-property-decorator'
import { Container } from 'typedi'

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

import EquipmentGroupService from '@/services/equipmentGroup'
import EquipmentFamilyService from '@/services/equipmentFamily'
import CustomService from '@/services/customService'

const equipmentGroupService = Container.get(EquipmentGroupService)
const equipmentFamilyService = Container.get(EquipmentFamilyService)
const customService = Container.get(CustomService)

@Component({
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
})
export default class IndexPage extends Vue {
    async created(): Promise<void> {
        customService.incr()
        customService.incr()
        customService.fetch()

        await equipmentGroupService.fetchGroups()
        await equipmentFamilyService.fetchFamilies()
    }

    get groups() {
        return equipmentGroupService.getGroups()
    }
}
</script>
