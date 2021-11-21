<template lang="pug">

.header-modal
    link-component._city(
        icon="collapse"
        iconSize="s"
    ) Москва
    login-button-component._login
    input-component._input(
        v-model="searchField"
        placeholder="Поиск"
        theme="dark"
    )
        template(
            #prefix
        )
            i.icon.icon--size-m.icon--search
    modal-content-component._content(
        title="Каталог"
    )
        template(
            #head
        )
            ._accessory
                link-component._link(
                    theme="white"
                    @click="clickEquipmentEmit('home')"
                ) Для дома
                i.icon.icon--size-s.icon--right-arrow
            ._accessory
                link-component._link(
                    theme="white"
                    @click="clickEquipmentEmit('home')"
                ) Для фитнес клубов
                i.icon.icon--size-s.icon--right-arrow
        navigation-component(
            align="vertical"
        )

</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator'

import Input from '@/components/ui/Input.vue'

import Dealers from '@/components/blanks/Dealers.vue'
import LoginButton from '@/components/ui/LoginButton.vue'
import RequestCall from '@/components/blanks/RequestCall.vue'
import ModalContent from '@/components/modals/ModalContent.vue'
import Navigation from '@/components/blanks/Navigation.vue'

@Component({
    components: {
        'navigation-component': Navigation,
        'input-component': Input,
        'modal-content-component': ModalContent,
        'dealers-component': Dealers,
        'request-call-component': RequestCall,
        'login-button-component': LoginButton,
    }
})
export default class HeaderModal extends Vue {
    @Emit('clickEquipment') clickEquipmentEmit(name: string) {/**/}

    searchField = ''
}

</script>
