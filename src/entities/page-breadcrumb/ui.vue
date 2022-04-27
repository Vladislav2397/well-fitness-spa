<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue'

import { PageBreadcrumb } from '@/shared/blanks/PageBreadcrumb'
import { Getter } from '@/shared/config'

@Component
export default class PageBreadcrumbEntity extends Vue {
    @Getter('pageBreadcrumb/title') title!: string
    @Getter('pageBreadcrumb/list') list!: {
        text: string
        href: string
    }[]

    render(h: CreateElement): VNode {
        return h(PageBreadcrumb, {
            props: {
                title: this.title,
                list: this.list,
            }
        })
    }
}
</script>
