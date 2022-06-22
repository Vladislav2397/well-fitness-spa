<template lang="pug">

.idea
    ._container.container
        section-wrapper-component._wrapper(
            title="Идеи и подборки"
            theme="dark"
            buttonText="Полная подборка"
            buttonTheme="ghost-light"
            @click="onClick"
        )
            ._list
                card-idea-component._card(
                    v-for="({size, src, alt}, index) in cards"
                    :key="index"
                    :size="size"
                    :src="src"
                    :alt="alt"
                )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { SectionWrapper } from '@/pages/Main/sections/SectionWrapper'
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

    onClick() {
        this.$router.push('/idea')
    }
}

</script>
