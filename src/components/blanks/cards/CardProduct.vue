<template lang="pug">
include ../../../tools/pug/mixins

+b.card-product
    +e.image
        img(
            src=""
            alt="image"
        )
    +e.content
        slot
    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CardProduct extends Vue {
}

</script>
