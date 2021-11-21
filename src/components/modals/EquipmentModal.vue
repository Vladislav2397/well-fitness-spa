<template lang="pug">

.equipment-modal
    link-component._breadcrumb(
        @click="clickBreadcrumbEmit"
    ) Назад
    modal-content-component._content(
        :is-spacing="false"
        :title="title"
    )
        link-component._link(
            v-for="({text, href}, index) in list"
            :key="index"
            :href="href"
            theme="white"
        ) {{ text }}
            i.icon.-size-s.-arrow

</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

import ModalContent from '@/components/modals/ModalContent.vue'

@Component({
    components: {
        'modal-content-component': ModalContent
    }
})
export default class EquipmentModal extends Vue {
    @Prop() readonly title!: string

    @Prop() readonly list!: equipmentModalLinkType[]

    @Emit('clickBreadcrumb') clickBreadcrumbEmit() {/**/}
}

export type equipmentModalLinkType = {
    text: string,
    href: string
}

</script>
