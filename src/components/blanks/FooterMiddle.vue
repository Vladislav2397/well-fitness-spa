<template lang="pug">

.footer-middle(
    :class="{ 'footer-middle--row' : isRow }"
)
    portal-target._section(
        v-if="device.size.tablet"
        name="phone"
    )
    ._section.-dealers(
        v-if="!device.size.desktop"
    )
        link-component._text.-link.-block(
            v-for="({ text, href }, index) in dealers"
            :key="index"
            :href="href"
        ) {{ text }}
    ._section.-mailsend
        input-component(
            v-model="input.value"
            theme="dark"
            placeholder="Подписаться на рассылку"
        )
            template(
                #postfix
            )
                i.icon.-size-m.-search
        portal-target._privacy(
            name="privacy"
        )
    portal._section.-phone(
        :disabled="!device.size.tablet"
        to="phone"
    )
        ._text
            template(
                v-if="device.size.tablet"
            ) +7 (000) 000-00-00 #[br] для Москвы
            template(
                v-else
            ) +7 (000) 000-00-00 для Москвы

        ._text
            template(
                v-if="device.size.tablet"
            )  8 (800) 000-00-00 #[br] для России
            template(
                v-else
            ) 8 (800) 000-00-00 для России
        link-component._text.-link(
            theme="white"
        ) Заказать звонок
        portal-target._inner(
            name="email"
        )

    portal._section.-email(
        to="email"
    )
        ._text wellfitness@wellfit.ru
        link-component._text.-link(
            theme="white"
        ) Написать
    portal._section.-privacy(
        :disabled="!device.size.tablet"
        to="privacy"
    )
        link-component._text.-link.-block(
            theme="primary"
        ) Публичная оферта
        link-component._text.-link.-block(
            theme="primary"
        ) Политика конфиденциальности

</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator'

import Input from '@/components/ui/Input.vue'
import Device from '@/mixins/device'

@Component({
    components: {
        'input-component': Input,
    },
})
export default class FooterMiddle extends Mixins(Device) {
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
