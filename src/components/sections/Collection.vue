<template lang="pug">

.collection
    ._container.container
        slot

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Collection extends Vue {
    @Prop() readonly quantity!: number
}

</script>
