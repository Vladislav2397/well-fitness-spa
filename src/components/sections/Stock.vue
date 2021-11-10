<template lang="pug">
include ../../tools/pug/mixins

+b.stock
    +e.container.container
        section-wrapper-component(
            buttonText="Все товары по акции"
        )
            template(
                v-slot:title
            )
                .tabs-component

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import SectionWrapper from '@/components/blanks/SectionWrapper.vue'
@Component({
    components: {
        'section-wrapper-component': SectionWrapper
    }
})
export default class Stock extends Vue {

}

</script>
