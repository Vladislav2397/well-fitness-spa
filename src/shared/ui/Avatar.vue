<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue'

@Component
export default class Avatar extends Vue {
    @Prop() readonly src!: string

    @Prop({ default: '' }) readonly alt!: string

    render (h: CreateElement): VNode {
        const children = h('img', {
            attrs: {
                src: this.src || '/images/common/image-placeholder.svg',
                alt: this.alt,
            },
        })

        return h('div', {
            class: 'avatar'
        }, [children])
    }
}

</script>
