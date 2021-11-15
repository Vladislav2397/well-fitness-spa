<template lang="pug">
.footer
    ._container.container
        ._top
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
        footer-middle-component._middle
        ._bottom
    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import FooterMiddle from '@/components/blanks/FooterMiddle.vue'

@Component({
    components: {
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
