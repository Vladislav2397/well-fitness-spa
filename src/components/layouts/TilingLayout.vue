<template lang="pug">

.tiling-layout(
    :style="{ '--item-count': countInRow }"
)
    slot(
        :itemClass="'tiling-layout__item'"
    )
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TilingLayout extends Vue {
    @Prop({ default: 3 }) readonly countInRow!: number
}

</script>
