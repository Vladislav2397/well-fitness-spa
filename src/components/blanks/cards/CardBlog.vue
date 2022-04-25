<template lang="pug">

.b-card-blog
    .__image
        img(
            :src="imageSrc"
            :alt="imageAlt"
        )
    .__content
        .__title {{ title }}
        .__description {{ description }}
        .__date {{ date }}
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CardBlog extends Vue {
    @Prop() readonly imageSrc!: string
    @Prop() readonly imageAlt!: string
    @Prop() readonly title!: string
    @Prop() readonly description!: string
    @Prop() readonly date!: string
}

</script>
