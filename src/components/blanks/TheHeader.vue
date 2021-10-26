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
                +e.LINK-COMPONENT.select--city(
                    v-if="!device.size.mobile"
                    icon="collapse"
                    iconSize="s"
                ) Москва
            +e.user-actions
                +e.dillers
                    span Для дилеров
                    button-component(
                        size="s"
                        theme="secondary"
                    ) Become a Partner
                +e.phone
                    span +7 (800) 800-80-80
                    link-component(
                        tag="span"
                        icon="collapse"
                        iconSize="s"
                    ) МСК
                    link-component(
                        tag="a"
                        iconSize="s"
                    ) Заказать звонок
                +e.login
                    span Войти
                    +e.AVATAR-COMPONENT.avatar
            //+e.user-actions(
            //    v-else
            //)
            //    template(
            //        v-if="device.size.tablet || device.size.tabletLate"
            //    )
            //        +e.I.action.icon--size-m.--stats
            //        +e.I.action.icon--size-m.--heart
            //    +e.I.action.icon--size-m.--cart
            //    +e.I.action.icon--size-l.--burger
    +e.middle
        +e.container.container
            +e.navigation
                +e.BUTTON-COMPONENT.catalog(
                    :iconLeft="true"
                    icon="bento"
                    size="m"
                    theme="brand"
                ) Каталог
                +e.search
                    i.icon.icon--size-m.icon--search
                +e.navbar
                    +e.LINK-COMPONENT.nav-link(
                        v-for="(link, index) in navigationItems"
                        :key="index"
                        :href="link.href"
                        tag="router-link"
                        theme="secondary"
                    ) {{ link.text }}
            +e.icons
                +e.I.action.icon--size-m.--stats
                +e.I.action.icon--size-m.--heart
                +e.I.action.icon--size-m.--cart
    +e.bottom
        +e.container.container
            link-component(
                v-for="(item, index) in additionItems"
                tag="span"
                icon="collapse"
                iconSize="s"
                theme="white"
            ) {{ item }}

</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'

import Device from '@/mixins/device'

@Component
export default class TheHeader extends Mixins(Device) {
    navigationItems = [
        {
            text: 'Бренды',
            href: '/',
        },
        {
            text: 'Сервис',
            href: '/',
        },
        {
            text: 'Услуги',
            href: '/',
        },
        {
            text: 'Поддержка',
            href: '/',
        },
        {
            text: 'О компании',
            href: '/',
        },
        {
            text: 'Блог',
            href: '/',
        },
        {
            text: 'Где купить',
            href: '/',
        },
        {
            text: 'Контакты',
            href: '/',
        },
    ]

    additionItems = [
        'Для дома',
        'Для фитнес клуба',
    ]
}
</script>
