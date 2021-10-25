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
            +e.user-actions()
                portal(
                    to="phone-line"
                )
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
            +e.user-actions
                +e.search
                +e.cart
                +e.I.burger.icon--size-l.--burger
    +e.middle(
        v-if="device.size.desktop"
    )
        +e.container.container
            +e.navigation
                +e.BUTTON-COMPONENT.catalog(
                    :iconLeft="true"
                    size="m"
                    theme="brand"
                ) Каталог
                +e.search
                +e.navbar
                    +e.LINK-COMPONENT.nav-link(
                        v-for="(link, index) in navigationItems"
                        :key="index"
                        :href="link.href"
                        tag="router-link"
                        theme="secondary"
                    ) {{ link.text }}
            +e.icons
                +e.stats
                +e.likes
                +e.cart
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
