<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {CreateElement, VNode} from 'vue'

@Component
export default class Form extends Vue.extend({functional: true}) {
    render(h: CreateElement): VNode {
        return h('div', ['Functional component content'])
    }
}
</script>

