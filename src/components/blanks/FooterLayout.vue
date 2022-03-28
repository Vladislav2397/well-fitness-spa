<template lang="pug">

.b-footer-layout
    .__top
        slot(
            name="top"
        )
    .__middle
        slot(
            name="middle"
        )
    .__bottom
        slot(
            name="bottom"
        )
    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class FooterLayout extends Vue {}

</script>
