<template lang="pug">

.b-idea
    .__container.container
        section-wrapper-component.__wrapper(
            title="Идеи и подборки"
            theme="dark"
            buttonText="Полная подборка"
            buttonTheme="ghost-light"
            @click="onClick"
        )
            .__list
                card-idea-component.__card(
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

    onClick(): void {
        this.$router.push({ name: 'Idea'})
    }
}

</script>
