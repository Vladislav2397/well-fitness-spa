<script lang="ts">
import { Component } from 'vue-property-decorator'
import { CreateElement, RenderContext, VNode } from 'vue'
import {VueFunctional} from '@/shared/config/functionalComponent'

@Component
export default class Logo extends VueFunctional {
    render(h: CreateElement, { data }: RenderContext): VNode {
        return h('router-link', {
            class: [
                data.staticClass,
                'logo'
            ],
            props: {
                to: {
                    name: 'Index'
                }
            }
        }, [
            h('img', {
                attrs: {
                    src: '/images/common/logo.svg',
                    alt: 'Logo',
                    height: '40'
                }
            })
        ])
    }
}

</script>

<style lang="scss" src="./logo--critical.scss"></style>
<style lang="scss" src="./logo--main.scss"></style>
