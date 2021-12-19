<template lang="pug">

.post
    ._image
        img(
            src=""
            alt=""
        )
    slot(
        :classContent="'post__content'"
    )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Post extends Vue {
    @Prop() readonly image!: []
    @Prop() readonly title!: string
    @Prop() readonly content!: string
}

</script>
