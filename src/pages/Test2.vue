<template lang="pug">
div(
    style="padding: 3rem 4rem; background: #000"
)
    div(
        style="background: #fff"
    )
        vue-flex(
            justify-content="start"
        )
            span Title
            div badge
</template>

<script lang="ts">
import { VueFlex } from '@/shared/layouts/VueFlex'

export default {
    name: 'Test',
    components: {
        VueFlex
    }
}
</script>
