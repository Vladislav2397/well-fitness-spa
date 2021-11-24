<template lang="pug">

.tiling-layout
    slot(
        v-bind:itemClass="'tiling-layout__item'"
    )
    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TilingLayout extends Vue {

}

</script>
