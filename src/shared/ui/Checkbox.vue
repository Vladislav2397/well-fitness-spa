<template lang="pug">

label.checkbox(
    :for="id"
)
    input._box(
        v-model="isActive"
        :id="id"
        type="checkbox"
    )
    slot

    
</template>

<script lang="ts">
import { Component, Prop, VModel, Vue } from 'vue-property-decorator'

@Component
export default class Checkbox extends Vue {
    @VModel() isActive: boolean | undefined

    @Prop() readonly id!: string
}

</script>
