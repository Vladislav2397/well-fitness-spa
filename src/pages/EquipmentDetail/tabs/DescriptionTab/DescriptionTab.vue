<template lang="pug">

.b-description-tab
    .__text.text
        .b-section.-dark
            .__text
                p.h3 Беговые дорожки Bowflex Results Series ™ это самые совершенные технологии, высочайшее качество и полноценная синхронизация данных.
            .__image
                img(
                    src="path/to/src"
                    alt="alt"
                )
        .b-section
            .__image
                img
            .__text
                h5.h3 Заголовок
                p.p2 Беговая дорожка Bowflex BXT128 – это одна из самых технологичных моделей для максимально эффективных и комфортных тренировок. Надежный двигатель мощностью 3.5 л.с. раскручивает полотно до 19.3 км/ч, а максимальный угол наклона в 15% позволяет разнообразить тренировки и имитировать условия интенсивногоподъема для любителей бега по пересеченной местности. Беговая дорожка Bowlfex BXT128 оснащена высокопрочным 3-х слойным полотном размером 51x152 см и инновационной системой амортизации Comfort Tech 3 Теперь каждый шаг идеально сглаживается, создавая ощущения пробежки на профессиональном покрытии!
    .__slider
        .__image
            img

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DescriptionTab extends Vue {
    //
}
</script>

<style lang="scss" src="./DescriptionTab.critical.scss" />
<style lang="scss" src="./DescriptionTab.main.scss" />
