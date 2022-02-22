<template lang="pug">

header.header
    ._top
        ._container.container
            ._logo
                router-link._image(
                    to="/"
                )
                    img(
                        src="/images/common/logo.svg"
                        height="40"
                    )
                link-component._city(
                    v-if="!device.size.mobile"
                    icon="collapse"
                    iconSize="s"

                    @click="clickCityEmit"
                ) Москва
            ._user-actions(
                v-if="device.size.desktop"
            )
                dealers-component._info
                request-call-component._info
                login-button-component._info.header__login
            ._user-actions(
                v-if="!device.size.desktop"
            )
                i._action.icon.icon--size-m.icon--search(
                    v-on:click="clickSearchEmit"
                )
                template(
                    v-if="device.size.tablet || device.size.tabletLate"
                )
                    i._action.icon.icon--size-m.icon--stats
                    i._action.icon.icon--size-m.icon--heart
                i._action.icon.icon--size-m.icon--cart
                i._action.icon.icon--size-l.icon--burger(
                    v-on:click="clickBurgerEmit"
                )
    ._middle(
        v-if="device.size.desktop || device.size.desktopLate"
    )
        ._container.container
            ._navbar
                button-component._catalog(
                    :iconLeft="true"
                    icon="bento"
                    size="m"
                    theme="brand"
                ) Каталог
                ._search
                    i.icon.-size-m.icon--search
                navigation-component._navigation(
                    align="horizontal"
                )
            ._icons
                i._action.icon.icon--size-m.icon--stats
                i._action.icon.icon--size-m.icon--heart
                i._action.icon.icon--size-m.icon--cart
    ._bottom
        ._container.container
            link-component._link(
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

import LoginButton from '@/components/ui/LoginButton.vue'
import RequestCall from '@/components/blanks/RequestCall.vue'
import Dealers from '@/components/blanks/Dealers.vue'
import Navigation from '@/components/blanks/Navigation.vue'

import { IDevice } from '@/use/device'

@Component({
    components: {
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
