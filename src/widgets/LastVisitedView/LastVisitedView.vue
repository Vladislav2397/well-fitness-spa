<template lang="pug">
.b-last-visited-view
    router-view
    .container
        c-section-wrapper(
            title="Вы смотрели"
        )
            c-card-product.__card
                c-card-product-stats.__card-stats(
                    :hasRating="true"
                    :rating="4"
                    title="Беговая дорожка CardioPower S35"
                    :price="['200000']"
                )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CardProduct from '@/components/blanks/cards/CardProduct.vue'
import CardProductStats from '@/components/blanks/cards/CardProductStats.vue'
import SectionWrapper from '@/components/blanks/SectionWrapper.vue'

@Component({
    components: {
        'c-section-wrapper': SectionWrapper,
        'c-card-product-stats': CardProductStats,
        'c-card-product': CardProduct
    }
})
export default class LastVisitedView extends Vue {}
</script>

<style lang="scss" src="./last-visited-view--critical.scss"></style>
<style lang="scss" src="./last-visited-view--main.scss"></style>
