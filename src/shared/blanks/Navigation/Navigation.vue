<!--<template lang="pug">-->
<!--    .b-navigation(-->
<!--        :class="classes"-->
<!--    )-->
<!--        link-component(-->
<!--            v-for="(link, index) in navigationItems"-->
<!--            :key="index"-->
<!--            :href="link.href"-->
<!--            tag="router-link"-->
<!--            theme="white"-->
<!--        ) {{ link.text }}-->

<!--</template>-->

<script lang="ts">
import {CreateElement, RenderContext, VNode} from 'vue'
import { Component } from 'vue-property-decorator'

import {VueFunctional} from '@/shared/config/functionalComponent'

const navigationItems = [
    {
        text: 'Бренды',
        href: '/brands',
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

interface NavigationProps {
    align: 'vertical' | 'horizontal'
}

@Component
export default class Navigation extends VueFunctional {
    render(
        h: CreateElement,
        { data, props }: RenderContext<NavigationProps>
    ): VNode {
        const align = props.align ?? 'vertical'

        const classes = [ data.staticClass, `navigation--align-${align}`]

        return h('nav', {
            class: classes
        }, [
            ...navigationItems.map(({text, href}, index) => h(
                'link-component',
                {
                    props: {
                        href,
                        key: index,
                        tag: 'router-link',
                        theme: 'white',
                    }
                }, [text]
            ))
        ])
    }
}

</script>
