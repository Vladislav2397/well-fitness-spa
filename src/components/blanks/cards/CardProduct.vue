<template lang="pug">

.card-product
    ._image
        img(
            src=""
            alt="image"
        )
    ._content
        slot
    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CardProduct extends Vue {
}

</script>
