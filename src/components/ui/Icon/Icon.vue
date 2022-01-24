<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue'

@Component
export default class Icon extends Vue {
    @Prop() size!: string
    @Prop() name!: string

    render(h: CreateElement): VNode {
        return h('i', {
            class: [`icon--size-${this.size}`, `icon--${this.name}`]
        })
    }
}
</script>
