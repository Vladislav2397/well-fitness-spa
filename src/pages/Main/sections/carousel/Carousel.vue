<template lang="pug">

.carousel
    ._container.container
        c-swiper._swiper
            c-swiper-slide._slide
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
                c-button-icon._action.-left
                c-button-icon._action.-right
    
</template>

<script>
import { directive, Swiper, SwiperSlide } from 'vue-awesome-swiper'
import ButtonIcon from '@/components/ui/ButtonIcon.vue'

export default {
    components: {
        'c-button-icon': ButtonIcon,
        'c-swiper': Swiper,
        'c-swiper-slide': SwiperSlide
    },
    directives: {
        swiper: directive
    }
}
</script>

<style lang="scss" src="carousel--critical.scss"></style>
<style lang="scss" src="carousel--main.scss"></style>
