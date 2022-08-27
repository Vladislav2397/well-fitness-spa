<template lang="pug">

.b-delivery-information
    .__item(
        v-for="(info, type) in data"
    )
        b {{ getTextByType(type) }} —&nbsp;
        span {{ info.text }}

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DeliveryInformation extends Vue {
    data = {
        delivery: {
            text: 'бесплатно, \nс 12 июля',
            hint: '',
        },
        self: {
            text: 'из магазина \nсегодня, 10 июля',
            hint: '',
        },
        build: {
            text: 'бесплатно',
            hint: '',
        },
        payment: {
            text: 'предоплата не требуется',
            hint: '',
        },
    }

    getTextByType(type: keyof DeliveryInformation['data']): string {
        const map: Record<typeof type, string> = {
            delivery: 'Доставка',
            self: 'Самовывоз',
            build: 'Сборка',
            payment: 'Оплата',
        }

        return map[type]
    }
}
</script>

<style lang="scss" src="./DeliveryInformation.critical.scss" />
<style lang="scss" src="./DeliveryInformation.main.scss" />
