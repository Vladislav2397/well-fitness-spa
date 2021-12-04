<template lang="pug">

.range
    ._top
        input-component._start(
            v-model="slider.value[0]"
            size="inherit"
        )
        ._divider
        input-component._end(
            v-model="slider.value[1]"
            size="inherit"
        )

    ._bar
        slider-component(
            v-model="slider.value"
            :max="10000"
            :min="0"
            :lazy="true"
            :height="2"
        )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import Input from '@/components/ui/Input.vue'
import VueSlider from 'vue-slider-component'

@Component({
    components: {
        'input-component': Input,
        'slider-component': VueSlider
    }
})
export default class Range extends Vue {
    @Prop() readonly range!: [start: number, end: number]

    slider = {
        value: [] as number[]
    }

    mounted() {
        this.slider.value = [this.range[0], this.range[1]]
    }
}

</script>
