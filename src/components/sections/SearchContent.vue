<template lang="pug">

.search-content
    input-component(
        v-model="searchField"
        theme="transparent"
        placeholder="Поиск"
    )
        template(
            #prefix
        )
            i.icon.-size-m.-search
    searched-items-component._item(
        :tag-list="['Для дома', 'Для фитнес клуба']"
        label="53 товара"
    )
    searched-items-component._item(
        :tag-list="['В новостях', 'В блоге']"
        label="12 статей"
    )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import Input from '@/components/ui/Input.vue'
import SearchedItems from '@/components/blanks/SearchedItems.vue'

@Component({
    components: {
        'searched-items-component': SearchedItems,
        'input-component': Input,
    },
})
export default class SearchContent extends Vue {
    searchField = ''
}

</script>
