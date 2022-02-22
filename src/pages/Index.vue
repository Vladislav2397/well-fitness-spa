<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import {CreateElement, VNode} from 'vue'

@Component
export default class Index extends Vue {
    render(h: CreateElement): VNode {
        return h('router-view')
    }
}
</script>
