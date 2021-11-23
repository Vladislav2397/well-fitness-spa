<template lang="pug">

.searched-items
    ._label
        span Найдено {{ label }}
        ._tags.scroll-row(
            v-if="tagList"
        )
            button-component._button(
                v-for="(tag, index) in tagList"
                :key="index"
                theme="secondary"
                @click="clickTagEmit(tag)"
            ) {{ tag }}
    ._list(
        :class="listClasses"
    )
        slot

</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

@Component({
    inheritAttrs: false
})
export default class SearchedItems extends Vue {
    @Prop() readonly label!: string

    @Prop() readonly tagList!: string[]

    @Prop() readonly listClasses!: string

    @Emit('clickTag') clickTagEmit(name: string) {/**/}
}

</script>
