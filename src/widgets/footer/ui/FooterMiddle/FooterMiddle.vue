<template lang="pug">

.b-footer-middle(
    :class="{ 'footer-middle--row' : isRow }"
)
    portal-target.__section(
        v-if="device.size.tablet"
        name="phone"
    )
    .__section.-dealers(
        v-if="!device.size.desktop"
    )
        link-component.__text.-link.-block(
            v-for="({ text, href }, index) in dealers"
            :key="index"
            :href="href"
        ) {{ text }}
    .__section.-mailsend
        input-component(
            v-model="input.value"
            theme="dark"
            placeholder="Подписаться на рассылку"
        )
            template(
                #postfix
            )
                i.icon.-size-m.-search
        portal-target.__privacy(
            name="privacy"
        )
    portal.__section.-phone(
        :disabled="!device.size.tablet"
        to="phone"
    )
        .__text
            template(
                v-if="device.size.tablet"
            ) +7 (000) 000-00-00 #[br] для Москвы
            template(
                v-else
            ) +7 (000) 000-00-00 для Москвы

        .__text
            template(
                v-if="device.size.tablet"
            )  8 (800) 000-00-00 #[br] для России
            template(
                v-else
            ) 8 (800) 000-00-00 для России
        link-component.__text.-link(
            theme="white"
        ) Заказать звонок
        portal-target.__inner(
            name="email"
        )

    portal.__section.-email(
        to="email"
    )
        .__text wellfitness@wellfit.ru
        link-component.__text.-link(
            theme="white"
        ) Написать
    portal.__section.-privacy(
        :disabled="!device.size.tablet"
        to="privacy"
    )
        link-component.__text.-link.-block(
            theme="primary"
        ) Публичная оферта
        link-component.__text.-link.-block(
            theme="primary"
        ) Политика конфиденциальности

</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from 'vue-property-decorator'

import { Input } from '@/shared/ui/Input'
import type { IDevice } from '@/use/device'

@Component({
    components: {
        'input-component': Input,
    },
})
export default class FooterMiddle extends Vue {
    @Inject('$device') device!: IDevice

    @Prop({ default: false }) readonly isRow!: boolean

    dealers = [
        {
            text: 'Become a partner',
            href: ''
        },
        {
            text: 'Для дилеров',
            href: ''
        }
    ]

    input = {
        value: '',
        error: false,
        errorMessage: '',
        successMessage: '',
    }
}

</script>

<style lang="scss" src="./FooterMiddle.critical.scss" />
<style lang="scss" src="./FooterMiddle.main.scss" />
