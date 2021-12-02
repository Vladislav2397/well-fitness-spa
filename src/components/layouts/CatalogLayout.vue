<template lang="pug">

.catalog-layout
    ._main
        slot
    ._aside
        slot(
            name="aside"
        )

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class CatalogLayouts extends Vue {

}

</script>
