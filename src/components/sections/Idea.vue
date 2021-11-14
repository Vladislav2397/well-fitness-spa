<template lang="pug">
include ../../tools/pug/mixins

+b.idea
    +e.container.container
        +e.SECTION-WRAPPER-COMPONENT.wrapper(
            title="Идеи и подборки"
            theme="dark"
            buttonText="Полная подборка"
            button-theme="ghost-light"
        )
            +e.list
                +e.CARD-IDEA-COMPONENT.card(
                    v-for="({size, src, alt}, index) in cards"
                    :key="index"
                    :size="size"
                    :src="src"
                    :alt="alt"
                )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import SectionWrapper from '@/components/blanks/SectionWrapper.vue'
import CardIdea from '@/components/blanks/cards/CardIdea.vue'

@Component({
    components: {
        'card-idea-component': CardIdea,
        'section-wrapper-component': SectionWrapper
    }
})
export default class Idea extends Vue {
    cards = [
        {
            size: 'l',
            src: 'some/image.png',
            alt: ''
        },
        {
            size: 's',
            src: 'some/image.png',
            alt: ''
        },
        {
            size: 's',
            src: 'some/image.png',
            alt: ''
        },
    ]
}

</script>
