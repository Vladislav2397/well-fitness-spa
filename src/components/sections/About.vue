<template lang="pug">
section.about
    ._container.container
        section-wrapper-component._wrapper(
            title="О компании"
            buttonText="Подробнее о компании"
        )
            ._subtitle Надежный партнер с&nbsp;2005&nbsp;года для сотен компаний от Калининграда до&nbsp;Владивостока.
            ._description Оптима Импорт — один из самых крупных импортеров фитнес-оборудования, эксклюзивно представляет на российском рынке ведущих мировых производителей: Sole Fitness, Optima Fitness, Halley, Marcy, SKI Simulator и др. Мы предлагаем широкий спектр самой современной и качественной продукции как для домашнего, так и для коммерческого фитнеса.
            ._image
                img(
                    src=""
                    alt=""
                )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import SectionWrapper from '@/components/blanks/SectionWrapper.vue'

@Component({
    components: {
        'section-wrapper-component': SectionWrapper
    }
})
export default class About extends Vue {

}

</script>
