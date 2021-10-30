<template lang="pug">
    include ../../tools/pug/mixins

    +b.header-modal
        +e.LINK-COMPONENT.city(
            icon="collapse"
            iconSize="s"
        ) Москва
        +e.LOGIN-BUTTON-COMPONENT.login
        +e.INPUT-COMPONENT.input(
            placeholder="Поиск"
        )
            template(
                v-slot:prefix
            )
                +e.prefix
                    i.icon.icon--size-m.icon--search
        +e.MODAL-CONTENT-COMPONENT.content(
            title="Каталог"
        )
            template(
                v-slot:head
            )
                +e.accessory
                    +e.LINK-COMPONENT.link(
                        theme="white"
                    ) Для дома
                    i.icon.icon--size-s.icon--right-arrow
                +e.accessory
                    +e.LINK-COMPONENT.link(
                        theme="white"
                    ) Для фитнес клубов
                    i.icon.icon--size-s.icon--right-arrow
            navigation-component(
                align="vertical"
            )

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

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

}

</script>
