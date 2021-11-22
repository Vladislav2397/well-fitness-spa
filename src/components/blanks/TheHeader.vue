<template lang="pug">

header.header
    ._top
        ._container.container
            ._logo
                ._image
                    img(
                        src="/images/common/logo.svg"
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

    @Emit('clickCity') clickCityEmit (): void {/**/}

    @Emit('clickSearch') clickSearchEmit (): void {/**/}

    additionItems = [
        'Для дома',
        'Для фитнес клуба',
    ]
}
</script>
