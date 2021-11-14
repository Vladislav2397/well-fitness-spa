<template lang="pug">
.card-blog
    ._image
        img(
            :src="imageSrc"
            :alt="imageAlt"
        )
    ._content
        ._title {{ title }}
        ._description {{ description }}
        ._date {{ date }}
    
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
