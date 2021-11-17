<template lang="pug">
.footer-middle(
    :class="{ 'footer-middle--row' : isRow }"
)
    ._section
        link-component._text.-link.-block(
            v-for="{ text, href } in dealers"
            :href="href"
        ) {{ text }}
    ._section
        input-component(
            v-model="input.value"
            placeholder="Подписаться на рассылку"
        )
            template(
                #postfix
            )
                i.icon.-size-m.-search
    ._section
        ._text +7 (000) 000-00-00 для Москвы
        ._text 8 (800) 000-00-00 для России
        link-component._text.-link(
            theme="white"
        ) Заказать звонок
    ._section
        ._text wellfitness@wellfit.ru
        link-component._text.-link(
            theme="white"
        ) Написать
    ._section
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
