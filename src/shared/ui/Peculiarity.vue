<template lang="pug">

.peculiarity
    ._title(
        @click="toggleCollapse"
    )
        template(
            v-if="title"
        ) {{ title }}
        template(
            v-else
        )
            slot(
                name="title"
            )
    ._list(
        ref="container"
        :style="container.style"
    )
        ._line(
            v-for="([key, value], index) in list"
            :key="index"
        )
            span {{ key }}
            span {{ value }}

</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator'

import Collapsible from '@/mixins/collapsible'

@Component
export default class Peculiarity extends Mixins(Collapsible) {
    @Prop() readonly title!: string
    @Prop() readonly list!: [key: string, value: string][]
}

</script>
