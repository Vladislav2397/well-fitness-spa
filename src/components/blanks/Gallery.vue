<template lang="pug">

.gallery
    ._main
        img(
            src=""
            alt=""
        )
    ._wrapper
        ._left
        ._list
            ._item(
                v-for="({src, alt}, index) in formmatedList"
                :key="index"
            )
                img(
                    :src="src"
                    :alt="alt"
                )
        ._right

</template>

<script lang="ts">
import {Component, Inject, Vue} from 'vue-property-decorator'

import type { IDevice } from '@/use/device'

@Component
export default class Gallery extends Vue {
    @Inject('$device') device!: IDevice

    list = [
        {
            src: '',
            alt: '',
        },
        {
            src: '',
            alt: '',
        },
        {
            src: '',
            alt: '',
        },
        {
            src: '',
            alt: '',
        },
        {
            src: '',
            alt: '',
        },
        {
            src: '',
            alt: '',
        },
        {
            src: '',
            alt: '',
        },
    ]

    get formmatedList() {
        if (this.device.size.mobile)
            return this.list.slice(0, 4)
        if (this.device.size.tablet)
            return this.list.slice(0, 5)
        return this.list.slice(0, 7)
    }
}

</script>
