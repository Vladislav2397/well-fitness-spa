<template lang="pug">
.home
    header-component
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import TheHeader from '@/components/blanks/TheHeader.vue'

@Component({
    components: {
        'header-component': TheHeader,
    }
})
export default class Index extends Vue {

}
</script>

<style lang="scss">
.real {
    display: flex;
    justify-content: space-between;
}
.li {
}
</style>
