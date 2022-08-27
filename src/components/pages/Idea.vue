<template lang="pug">

.page
    //page-breadcrumb-component(
    //    title="Идеи и подборки"
    //    :list="breadcrumbList"
    //)
    pagination-wrapper-component
        tiling-layout-component(
            count-in-row="2"
        )
            template(
                #default="{ classItem }"
            )
                card-idea-component(
                    v-for="(idea, index) in cards"
                    :key="idea.id"
                    :class="classItem"
                    size="l"
                    :src="getImageApi(idea.image)"
                    :alt="idea.name"
                )

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import PageBreadcrumb, { breadcrumbListType } from '@/components/blanks/PageBreadcrumb.vue'
import Tiling from '@/components/sections/Tiling.vue'
import TilingLayout from '@/components/layouts/TilingLayout.vue'
import { CardIdea } from '@/pages/Main/sections/idea/CardIdea'
import { PaginationWrapper } from '@/shared/ui/PaginationWrapper'
import {gql, request} from "graphql-request"
import {env} from "@/shared/config"
import {Model} from "@/shared/config/decorators"
import { Idea as IdeaModel } from '@/entities/idea'
import {Collection, Repository} from "@vuex-orm/core"
import apiHelpers from "@/shared/lib/api-helpers"

@Component({
    components: {
        'pagination-wrapper-component': PaginationWrapper,
        'card-idea-component': CardIdea,
        'tiling-component': Tiling,
        'tiling-layout-component': TilingLayout,
        'page-breadcrumb-component': PageBreadcrumb,
    }
})
export default class Idea extends Vue {
    @Model(IdeaModel) Idea!: Repository<IdeaModel>

    breadcrumbList = [
        {
            text: 'Идеи и подборки',
            href: '/idea'
        }
    ] as breadcrumbListType

    getImageApi = apiHelpers.getImageApi

    get cards(): Collection<IdeaModel> {
        return this.Idea.all()
    }

    async created() {
        try {
            const query = gql`
                {
                    ideas {
                        id
                        name
                        image
                    }
                }
            `

            const { ideas } = await request(env.GRAPHQL_HOST, query)

            this.Idea.save(ideas)
        } catch (error) {
            console.log('error')
        }
    }
}
</script>
