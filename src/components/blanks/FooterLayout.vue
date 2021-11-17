<template lang="pug">
.footer-layout
    ._top
        slot(
            name="top"
        )
    ._middle
        slot(
            name="middle"
        )
    ._bottom
        slot(
            name="bottom"
        )
    
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class FooterLayout extends Vue {

}

</script>
