<template lang="pug">

.b-footer
    footer-layout-component.__container.container
        template(
            #top
        )
            .__column(
                v-for="({ title, list }, index) in links"
                :key="`column${index}`"
                :class="{ 'footer__column--bottom' : device.size.mobile && index > 1 }"
            )
                h4 {{ title }}
                link-component.__link(
                    v-for="({text, href}, index) in list"
                    :key="`link${index}`"
                    :href="href"
                ) {{ text }}
        template(
            #middle
        )
            footer-middle-component
        template(
            #bottom
        )
            portal.__logo(
                :disabled="!device.size.mobile"
                to="logo"
            )
                c-logo
                span © WellFitness. 2007 Все права защищены
            .__social
                i.icon.-size-m.-instagram
                i.icon.-size-m.-facebook
                i.icon.-size-m.-youtube
            portal-target(
                v-if="device.size.mobile"
                name="logo"
            )
            .__dealers(
                v-if="device.size.desktop"
            )
                button-component(
                    theme="secondary"
                    size="s"
                ) Become a Partner
                button-component(
                    theme="ghost"
                    size="s"
                ) Для дилеров
            .__paycards
                .__item(
                    v-for="i in 4"
                    :key="i"
                )
                    img(
                        src=""
                        alt=""
                    )

</template>

<script lang="ts">
// FIXME: Refactor component: Soo much portals and components
import { Component, Inject, Vue } from 'vue-property-decorator'

import { FooterMiddle } from '../FooterMiddle'
import { FooterLayout } from '@/shared/layouts/FooterLayout'
import { Logo } from '@/shared/ui/Logo'
import type { IDevice } from '@/use/device'

@Component({
    components: {
        'c-logo': Logo,
        'footer-layout-component': FooterLayout,
        'footer-middle-component': FooterMiddle,
    }
})
export default class TheFooter extends Vue {
    @Inject('$device') device!: IDevice

    links = [
        {
            title: 'Каталог',
            list: [
                {
                    text: 'Для дома',
                    href: '',
                },
                {
                    text: 'Для фитнес клубов',
                    href: '',
                },
                {
                    text: 'Акции',
                    href: '',
                },
                {
                    text: 'Новинки',
                    href: '',
                },
                {
                    text: 'Наши бренды',
                    href: '',
                },
            ]
        },
        {
            title: 'Поддержка',
            list: [
                {
                    text: 'Доставка и оплата',
                    href: '',
                },
                {
                    text: 'Условия возврата',
                    href: '',
                },
                {
                    text: 'Сервисная заявка',
                    href: '',
                },
                {
                    text: 'Обслуживание фитнес клубов',
                    href: '',
                },
                {
                    text: 'FAQ',
                    href: '',
                },
                {
                    text: 'Инструкции',
                    href: '',
                },
                {
                    text: 'Гарантия',
                    href: '',
                },
            ]
        },
        {
            title: 'Услуги',
            list: [
                {
                    text: '3D проект',
                    href: '',
                },
                {
                    text: 'Консалтинг',
                    href: '',
                },
                {
                    text: 'Коммерческое предложение',
                    href: '',
                },
                {
                    text: 'Лизинг',
                    href: '',
                },
                {
                    text: 'Trade-IN',
                    href: '',
                },
                {
                    text: 'В рассрочку',
                    href: '',
                },
                {
                    text: 'Сборка',
                    href: '',
                },
            ]
        },
        {
            title: 'О компании',
            list: [
                {
                    text: 'О нас',
                    href: '',
                },
                {
                    text: 'Новости',
                    href: '',
                },
                {
                    text: 'Блог',
                    href: '',
                },
                {
                    text: 'Наши проекты',
                    href: '',
                },
                {
                    text: 'Выставочный зал',
                    href: '',
                },
                {
                    text: 'Контакты',
                    href: '',
                },
            ]
        },
    ]
}

</script>

<style lang="scss" src="./TheFooter.critical.scss"></style>
<style lang="scss" src="./TheFooter.main.scss"></style>
