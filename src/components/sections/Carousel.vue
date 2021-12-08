<template lang="pug">

.carousel
    ._container.container
        swiper-component._swiper
            swiper-slide-component._slide
                ._caption
                    span._brand zero runner
                    h2._title Бег с нулевой#[br]ударной#[br]нагрузкой#[br]
                        span на&nbsp;суставы
                    button-component._button(
                        tag="button"
                        theme="ghost-brand"
                    ) Узнать больше
                ._triangle
                    img(
                        src="/images/index/triangle.svg"
                    )
                ._image
                    img(
                        src="/images/carousel/1.png"
                    )
            ._controls
                button-icon-component._action.-left
                button-icon-component._action.-right
    
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

import ButtonIcon from '@/components/ui/ButtonIcon.vue'

@Component({
    components: {
        'button-icon-component': ButtonIcon,
        'swiper-component': Swiper,
        'swiper-slide-component': SwiperSlide
    },
    directives: {
        swiper: directive
    }
})
export default class Carousel extends Vue {}

</script>
