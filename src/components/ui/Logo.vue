<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue'

@Component
export default class Logo extends Vue {
    render(h: CreateElement): VNode {
        return h('div', {
            class: 'logo'
        }, [
            h('img', {
                attrs: {
                    src: '/images/common/logo.svg'
                }
            })
        ])
    }
}

</script>
