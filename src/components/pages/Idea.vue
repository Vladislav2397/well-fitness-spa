<template lang="pug">

.page
    page-breadcrumb-component(
        title="Идеи и подборки"
        :list="breadcrumbList"
    )
    tiling-component(
        count-in-row="2"
    )
        template(
            #default="slotProps"
        )
            card-idea-component(
                v-for="({size, src, alt}, index) in cards"
                :key="index"
                :class="slotProps.classItem"
                :size="size"
                :src="src"
                :alt="alt"
            )

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import PageBreadcrumb, { breadcrumbListType } from '@/components/blanks/PageBreadcrumb.vue'
import Tiling from '@/components/sections/Tiling.vue'
import TilingLayout from '@/components/layouts/TilingLayout.vue'
import CardIdea from '@/components/blanks/cards/CardIdea.vue'

@Component({
    components: {
        'card-idea-component': CardIdea,
        'tiling-component': Tiling,
        'tiling-layout-component': TilingLayout,
        'page-breadcrumb-component': PageBreadcrumb,
    }
})
export default class Idea extends Vue {
    breadcrumbList = [
        {
            text: 'Идеи и подборки',
            href: '/idea'
        }
    ] as breadcrumbListType

    cards = [
        {
            src: '.',
            size: 'l',
            alt: 'image'
        },
        {
            src: '.',
            size: 'l',
            alt: 'image'
        },
        {
            src: '.',
            size: 'l',
            alt: 'image'
        },
        {
            src: '.',
            size: 'l',
            alt: 'image'
        },
        {
            src: '.',
            size: 'l',
            alt: 'image'
        },
    ]
}
</script>
