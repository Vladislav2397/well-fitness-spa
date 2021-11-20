<template lang="pug">

.footer
    footer-layout-component._container.container
        template(
            #top
        )
            ._column(
                v-for="({ title, list }, index) in links"
                :key="`column${index}`"
                :class="{ 'footer__column--bottom' : index > 1 }"
            )
                h4 {{ title }}
                link-component._link(
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
            ._social
                i.icon.-size-m.-instagram
                i.icon.-size-m.-facebook
                i.icon.-size-m.-youtube
            ._logo
                logo-component
                span © WellFitness. 2007 Все права защищены
            ._paycards
                ._item(
                    v-for="i in 4"
                    :key="i"
                )
                    img(
                        src=""
                        alt=""
                    )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import FooterMiddle from '@/components/blanks/FooterMiddle.vue'
import FooterLayout from '@/components/blanks/FooterLayout.vue'
import Logo from '@/components/ui/Logo.vue'

@Component({
    components: {
        'logo-component': Logo,
        'footer-layout-component': FooterLayout,
        'footer-middle-component': FooterMiddle,
    }
})
export default class TheFooter extends Vue {
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
