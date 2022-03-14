<script lang="ts">
import { Functional } from '@/shared/config/functionalComponent'
import { Icon, IconProps } from '@/shared/ui/Icon'

export default Functional((h, { data, listeners, children }) => {
    const iconSettings = {
        staticClass: 'wrapper-modal__close',
        props: {
            size: 's',
            name: 'close',
        } as IconProps,
        on: {
            ...listeners.close && {
                click: listeners.close,
            }
        }
    }

    const rootSettings = {
        class: [ data.staticClass, 'wrapper-modal'],
    }
    const rootChildren = [ h(Icon, iconSettings), children ]

    return h('div', rootSettings, rootChildren)
})
</script>

<style lang="scss">
.wrapper-modal {
    position: relative;
    background-color: #fff;
    padding: toRem(60) toRem(70);
    border-radius: toRem(6);

    &__close {
        position: absolute;
        top: toRem(20);
        right: toRem(20);
        color: #858fa4;
        cursor: pointer;
    }
}
</style>
