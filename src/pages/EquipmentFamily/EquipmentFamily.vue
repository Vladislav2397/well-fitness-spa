<template lang="pug">

.page
    pagination-wrapper-component
        c-catalog

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import PaginationWrapper from '@/components/sections/PaginationWrapper.vue'
import { Catalog } from '@/pages/EquipmentFamily/Catalog'

import {equipmentModels} from '@/entities/equipment'
import {gql, request} from "graphql-request"

@Component({
    components: {
        'c-catalog': Catalog,
        'pagination-wrapper-component': PaginationWrapper,
    }
})
export default class EquipmentFamily extends Vue {
    async created(): Promise<void> {
        const query = gql`
            {
                familyById (id:${this.$route.params.family}) {
                    id
                    name
                    categories {
                        id
                        name
                    }
                }
            }
        `

        const { family } = await request('http://localhost:8000/graphql', query)

        await equipmentModels.EquipmentFamily.insert({
            data: family
        })
    }
}
</script>
