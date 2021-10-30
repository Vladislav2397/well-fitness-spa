<template lang="pug">
include ../../tools/pug/mixins

+b.HEADER.header
    +e.top
        +e.container.container
            +e.logo
                +e.image
                    img(
                        src="/images/common/logo.svg"
                    )
                +e.LINK-COMPONENT.city(
                    v-if="!device.size.mobile"
                    icon="collapse"
                    iconSize="s"
                ) Москва
            +e.user-actions(
                v-if="device.size.desktop"
            )
                +e.DEALERS-COMPONENT.info
                +e.REQUEST-CALL-COMPONENT.info
                +e.LOGIN-BUTTON-COMPONENT.info.__login
            +e.user-actions(
                v-if="!device.size.desktop"
            )
                +e.I.action.icon--size-m.icon--search
                template(
                    v-if="device.size.tablet || device.size.tabletLate"
                )
                    +e.I.action.icon--size-m.icon--stats
                    +e.I.action.icon--size-m.icon--heart
                +e.I.action.icon--size-m.icon--cart
                +e.I.action.icon--size-l.icon--burger(
                    v-on:click="clickBurgerEmit"
                )
    +e.middle(
        v-if="device.size.desktop || device.size.desktopLate"
    )
        +e.container.container
            +e.navigation.navbar
                +e.BUTTON-COMPONENT.catalog(
                    :iconLeft="true"
                    icon="bento"
                    size="m"
                    theme="brand"
                ) Каталог
                +e.search
                    i.icon.icon--size-m.icon--search
                navigation-component
            +e.icons
                +e.I.action.icon--size-m.icon--stats
                +e.I.action.icon--size-m.icon--heart
                +e.I.action.icon--size-m.icon--cart
    +e.bottom
        +e.container.container
            link-component(
                v-for="(item, index) in additionItems"
                :key="index"
                tag="span"
                icon="collapse"
                iconSize="s"
                theme="white"
            ) {{ item }}

</template>

<script lang="ts">
import { Component, Emit, Mixins } from 'vue-property-decorator'

import LoginButton from '@/components/ui/LoginButton.vue'
import RequestCall from '@/components/blanks/RequestCall.vue'
import Dealers from '@/components/blanks/Dealers.vue'
import Navigation from '@/components/blanks/Navigation.vue'

import Device from '@/mixins/device'

@Component({
    components: {
        'navigation-component': Navigation,
        'dealers-component': Dealers,
        'request-call-component': RequestCall,
        'login-button-component': LoginButton,
    }
})
export default class TheHeader extends Mixins(Device) {
    @Emit('clickBurger') clickBurgerEmit (): void {/**/}


    additionItems = [
        'Для дома',
        'Для фитнес клуба',
    ]
}
</script>
