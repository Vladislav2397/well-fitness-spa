<template lang="pug">

.filter-group(
    :class="classes"
)
    ._title(
        v-if="title"
    ) {{ title }}
    slot(
        :classItem="'filter-group__item'"
    )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class FilterGroup extends Vue {
    @Prop() readonly title!: string

    @Prop() readonly theme!: 'secondary' | 'light'

    get classes() {
        const classes = []

        if (this.theme) classes.push(`filter-group--theme-${this.theme}`)

        return classes
    }
}

</script>
