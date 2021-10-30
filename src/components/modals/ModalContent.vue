<template lang="pug">
    include ../../tools/pug/mixins

    +b.modal-content
        +e.title(
            v-if="title"
        ) {{ title }}
        slot(
            name="head"
        )
        +e.section
            slot
        +e.section
            request-call-component
        +e.section
            dealers-component(
                view="modal"
            )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import RequestCall from '@/components/blanks/RequestCall.vue'
import Dealers from '@/components/blanks/Dealers.vue'
@Component({
    components: {
        'dealers-component': Dealers,
        'request-call-component': RequestCall
    }
})
export default class ModalContent extends Vue {
    @Prop() readonly title!: string
}

</script>
