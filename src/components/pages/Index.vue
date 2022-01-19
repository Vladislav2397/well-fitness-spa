<template lang="pug">

.page
    carousel-component
    home-equipment-component
    gym-equipment-component
    stock-component
    idea-component
    brand-component
    addition-component
    about-component
    become-partner-component
    blog-component

</template>

<script lang="ts">
// FIXME: Replace all components bem on b-block
import { Vue, Component } from 'vue-property-decorator'
import { useModule } from 'vuex-simple'

import EquipmentModule from '@/store/equipment'

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

@Component({
    components: {
        'carousel-component': Carousel,
        'home-equipment-component': HomeEquipment,
        'gym-equipment-component': GymEquipment,
        'stock-component': Stock,
        'idea-component': Idea,
        'brand-component': Brand,
        'addition-component': Addition,
        'about-component': About,
        'become-partner-component': BecomePartner,
        'blog-component': Blog,
    }
})
export default class IndexPage extends Vue {
    // public equipmentModule: EquipmentModule =
    //     useModule(this.$store, ['EquipmentModule'])

    mounted(): void {
        // this.equipmentModule.fetchList('home')
    }
}
</script>
