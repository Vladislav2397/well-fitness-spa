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
import { Container } from 'typedi'
import EquipmentGroupModel from '@/store/models/equipmentFamily'

const equipmentGroupService = Container.get(EquipmentGroupService)

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
    async created(): Promise<void> {
        await equipmentGroupService.fetchGroups()

        await EquipmentGroupModel.insert({
            data: [{
                stickies: [true, true, true],
                quantity: 3,
                characteristics: [
                    ['Тип дорожки', 'Домашняя'],
                    ['Бег.полотно', '1200 х 450 мм'],
                    ['Мощность двигателя', '2,0 л.с.'],
                    ['Беговое полотно', '2-х слойное'],
                    ['Производитель', 'Cardio Power'],
                ],
                hasShowRoom: true,
                price: [100_000, 120_000],
                rating: 5,
                title: 'Беговая дорожка Bowflex G32i9',
                image: ['path/to/src.png', 'alt image'],
            }],
        })
    }

    get groups() {
        return equipmentGroupService.getGroups()

    }
}
</script>
