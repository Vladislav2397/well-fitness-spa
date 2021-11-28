<template lang="pug">

.equipment-type-detail
    banner-component
    tag-group-component(
        v-model="tags.active"
        :list="tags.list"
    )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import TagGroup from '@/components/blanks/TagGroup.vue'
import Banner from '@/components/blanks/Banner.vue'

@Component({
    components: {
        'tag-group-component': TagGroup,
        'banner-component': Banner,
    },
})
export default class EquipmentTypeDetail extends Vue {
    tags = {
        active: 0,
        list: [
            'Беговые дорожки',
            'Эллиптические',
            'Велотренажеры',
            'Степперы',
        ]
    }
}

</script>
