<template lang="pug">

.tab-group
    ._tab(
        v-for="item in list"
        v-on:click="clickEmit(item[0])"
    ) {{ item[1] }}
    
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TabGroup extends Vue {
    @Prop() readonly list?: [id: number, name: string][]

    @Emit('click') clickEmit(id: number) {/**/}
}

</script>
