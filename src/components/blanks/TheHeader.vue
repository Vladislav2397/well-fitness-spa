<template lang="pug">

header.b-header
    .__top
        .__container.container
            .__logo
                c-logo.__image
                link-component.__city(
                    v-if="!device.size.mobile"
                    icon="collapse"
                    iconSize="s"

                    @click="clickCityEmit"
                ) Москва
            .__user-actions(
                v-if="device.size.desktop"
            )
                dealers-component.__info
                request-call-component.__info
                login-button-component.__info.header__login
            .__user-actions(
                v-if="!device.size.desktop"
            )
                i.__action.icon.-size-m.-search(
                    v-on:click="clickSearchEmit"
                )
                template(
                    v-if="device.size.tablet || device.size.tabletLate"
                )
                    i.__action.b-icon.-size-m.-stats
                    i.__action.b-icon.-size-m.-heart
                i.__action.b-icon.-size-m.-cart
                i.__action.b-icon.-size-l.-burger(
                    v-on:click="clickBurgerEmit"
                )
    .__middle(
        v-if="device.size.desktop || device.size.desktopLate"
    )
        .__container.container
            .__navbar
                button-component.__catalog(
                    :iconLeft="true"
                    icon="bento"
                    size="m"
                    theme="brand"
                ) Каталог
                .__search
                    i.b-icon.-size-m.-search
                navigation-component.__navigation(
                    align="horizontal"
                )
            .__icons
                i.__action.icon.icon--size-m.icon--stats
                i.__action.icon.icon--size-m.icon--heart
                i.__action.icon.icon--size-m.icon--cart
    .__bottom
        .__container.container
            link-component.__link(
                v-for="({ text, href }, index) in additionItems"
                :key="index"
                :href="href"
                tag="router-link"
                icon="collapse"
                iconSize="s"
                theme="white"
            ) {{ text }}

</template>

<script lang="ts">
import { Component, Emit, Inject, Vue } from 'vue-property-decorator'

import { Logo } from '@/shared/ui/Logo'
import LoginButton from '@/components/ui/LoginButton.vue'
import RequestCall from '@/components/blanks/RequestCall.vue'
import Dealers from '@/components/blanks/Dealers.vue'
import Navigation from '@/components/blanks/Navigation.vue'

import { IDevice } from '@/use/device'

@Component({
    components: {
        'c-logo': Logo,
        'navigation-component': Navigation,
        'dealers-component': Dealers,
        'request-call-component': RequestCall,
        'login-button-component': LoginButton,
    }
})
export default class TheHeader extends Vue {
    @Inject('$device') device!: IDevice

    @Emit('clickBurger') clickBurgerEmit (): void {/**/}
    @Emit('clickCity') clickCityEmit (): void {/**/}
    @Emit('clickSearch') clickSearchEmit (): void {/**/}

    additionItems = [
        {
            text: 'Для дома',
            href: '/equipment/home',
        },
        {
            text: 'Для фитнес клуба',
            href: '/equipment/gym',
        },
    ]
}
</script>
