<template lang="pug">

.b-tiling
    .__container.container
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
import {Component, Prop, Vue} from 'vue-property-decorator'
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

<style lang="scss" src="./tiling--critical.scss"></style>
<style lang="scss" src="./tiling--main.scss"></style>
