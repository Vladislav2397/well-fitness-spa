<template lang="pug">
    include ../../tools/pug/mixins

    +b.navigation(
        :class="classes"
    )
        link-component(
            v-for="(link, index) in navigationItems"
            :key="index"
            :href="link.href"
            tag="router-link"
            theme="white"
        ) {{ link.text }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Navigation extends Vue {
    @Prop({
        default: 'vertical'
    }) readonly align!: 'vertical' | 'horizontal'

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

    get classes (): string[] {
        const classes = []

        if (this.align) classes.push(`navigation--align-${this.align}`)

        return classes
    }
}

</script>
