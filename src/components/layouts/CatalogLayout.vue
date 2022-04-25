<template lang="pug">

.b-catalog-layout
    .__main
        slot
    slot(
        name="aside"
        :classContainer="'catalog-layout__aside'"
    )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CatalogLayouts extends Vue {

}

</script>
