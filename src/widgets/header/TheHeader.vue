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
                ) Москва
            .__user-actions(
                v-if="device.size.desktop"
            )
                c-dealers.__info
                c-request-call.__info
                c-login-button.__info
            .__user-actions(
                v-if="!device.size.desktop"
            )
                c-icon.__action(
                    name="search"
                )
                template(
                    v-if="device.size.tablet || device.size.tabletLate"
                )
                    c-icon.__action(
                        name="stats"
                    )
                    c-icon.__action(
                        name="heart"
                    )
                c-icon.__action(
                    name="cart"
                )
                c-icon.__action(
                    name="burger"
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
                    c-icon(
                        name="search"
                    )
                c-navigation.__navigation(
                    align="horizontal"
                )
            .__icons
                c-icon.__action(
                    size="m"
                    name="stats"
                )
                c-icon.__action(
                    size="m"
                    name="heart"
                )
                c-icon.__action(
                    size="m"
                    name="cart"
                )
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

<script setup lang="ts">
import {inject, defineEmits} from 'vue'

const device = inject('$device')

const emit = defineEmits<{
    (e: 'clickBurger'): void
    (e: 'clickCity'): void
    (e: 'clickSearch'): void
}>()

const clickSearchEmit = () => emit('clickSearch')
const clickBurgerEmit = () => emit('clickBurger')
const clickCityEmit = () => emit('clickCity')

const additionItems = [
    {
        text: 'Для дома',
        href: '/equipments/home',
    },
    {
        text: 'Для фитнес клуба',
        href: '/equipments/gym',
    },
]

</script>

<script lang="ts">
import { Logo } from '@/shared/ui/Logo'
import { Icon } from '@/shared/ui/Icon'
import { Dealers } from '@/shared/blanks/Dealers'
import { RequestCall } from '@/shared/blanks/RequestCall'
import { LoginButton } from '@/features/auth'
import { Navigation } from '@/shared/blanks/Navigation'
import { DropdownWrapper } from '@/shared/ui/DropdownWrapper'
import { Card } from '@/shared/ui/Card'

export default {
    components: {
        'c-card': Card,
        'c-dropdown': DropdownWrapper,
        'c-logo': Logo,
        'c-dealers': Dealers,
        'c-request-call': RequestCall,
        'c-login-button': LoginButton,
        'c-icon': Icon,
        'c-navigation': Navigation,
    }
}
</script>
