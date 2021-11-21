<template lang="pug">

.city-modal
    h3 Введите город
    input-component._input(
        v-model="searchField"
        placeholder="Введите город"
    )
    span Например:&nbsp;
        link-component._link(
            theme="primary"
            @click="searchField = 'Москва'"
        ) Москва
        link-component._link(
            theme="primary"
            @click="searchField = 'Самара'"
        ) Самара

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import Input from '@/components/ui/Input.vue'

@Component({
    components: {
        'input-component': Input,
    },
})
export default class CityModal extends Vue {
    searchField = ''
}

</script>
