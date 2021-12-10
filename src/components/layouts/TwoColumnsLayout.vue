<template lang="pug">

.two-columns-layout
    slot(
        name="left"
        :_class="'two-columns-layout__left'"
    )
    slot(
        name="right"
        :_class="'two-columns-layout__right'"
    )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TwoColumnsLayout extends Vue {

}

</script>
