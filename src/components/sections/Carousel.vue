<template lang="pug">
include ../../tools/pug/mixins

+b.carousel
    +e.container.container
        +e.SWIPER-COMPONENT.swiper
            +e.SWIPER-SLIDE-COMPONENT.slide
                +e.caption
                    +e.SPAN.brand zero runner
                    +e.H2.title Бег с нулевой#[br]ударной#[br]нагрузкой#[br]
                        span на&nbsp;суставы
                    +e.BUTTON-COMPONENT.button(
                        tag="button"
                        theme="ghost-brand"
                    ) Узнать больше
                +e.triangle
                    img(
                        src="/images/index/triangle.svg"
                    )
                +e.image
                    img(
                        src="/images/carousel/1.png"
                    )
            +e.controls
                +e.BUTTON-ICON-COMPONENT.action--left
                +e.BUTTON-ICON-COMPONENT.action--right
    
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
