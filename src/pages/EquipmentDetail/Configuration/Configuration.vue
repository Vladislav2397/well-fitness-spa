<template lang="pug">

.b-configuration
    .__title Конфигурация
    .__groups
        .__group(
            v-for="group in groups"
        )
            .__name {{ group.name }}
            .__list
                .__options
                    button.__option(
                        v-for="option in group.list"
                    ) {{ option.text }}


</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

type ConfigOption = {
    color?: string
    text: string
    description?: string
}

type ConfigGroup = {
    id: number
    name: string
    list: ConfigOption[]
}

@Component
export default class Configuration extends Vue {
    groups: Record<ConfigGroup["id"], ConfigGroup> = {
        1: {
            id: 1,
            name: 'Размер, см',
            list: [
                {
                    text: '1500 x 2000',
                },
                {
                    text: '1700 x 2000',
                },
                {
                    text: '1900 x 2000',
                    description: '+ 5000',
                },
            ]
        },
        2: {
            id: 2,
            name: 'Вес стека, г',
            list: [
                {
                    text: '150',
                },
                {
                    text: '500',
                },
                {
                    text: '800',
                    description: '+ 500',
                },
            ],
        }
    }
}
</script>

<style lang="scss" src="./Configuration.critical.scss" />
<style lang="scss" src="./Configuration.main.scss" />
