<template lang="pug">

.b-request-call
    span +7 (800) 800-80-80
    c-dropdown-wrapper.__link(
        v-model="isOpenDropdown"
    )
        link-component(
            v-if="isNotMobile"

            tag="span"
            icon="collapse"
            iconSize="s"
        ) МСК
        template(
            #content
        )
            c-card
                p text
                span number
    link-component(
        tag="a"
        iconSize="s"
    ) Заказать звонок

</template>

<script lang="ts" setup>
import {computed, inject} from '@vue/composition-api'

import {IDevice} from '@/use/device'

const isOpenDropdown = false

const device = inject<IDevice>('$device')

const isNotMobile = computed(
    () => device?.size.desktop || device?.size.tablet
)
</script>

<script lang="ts">
import { DropdownWrapper } from '@/shared/ui/DropdownWrapper'
import { Card } from '@/shared/ui/Card'

export default {
    components: {
        'c-dropdown-wrapper': DropdownWrapper,
        'c-card': Card,
    }
}
</script>
