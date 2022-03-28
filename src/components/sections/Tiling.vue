<template lang="pug">

.tiling
    ._container.container
        tiling-layout-component(
            :count-in-row="countInRow"
        )
            template(
                #default="{ classItem }"
            )
                slot(
                    :classItem="classItem"
                )
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import TilingLayout from '@/components/layouts/TilingLayout.vue'

@Component({
    components: {
        'tiling-layout-component': TilingLayout
    }
})
export default class Tiling extends Vue {
    @Prop() readonly countInRow!: number
}

</script>
