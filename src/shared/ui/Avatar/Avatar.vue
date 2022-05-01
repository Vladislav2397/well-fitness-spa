<script lang="ts">
import { Functional } from '@/shared/config/functionalComponent'

type AvatarProps = {
    src: string
    alt: string
}

export default Functional<AvatarProps>((h, { props }) => {
    const children = h('img', {
        attrs: {
            src: props.src || '/images/common/image-placeholder.svg',
            alt: props.alt,
        },
    })

    return h('div', {
        class: 'avatar'
    }, [children])
})
</script>

<style lang="scss" src="./avatar--critical.scss"></style>
<style lang="scss" src="./avatar--main.scss"></style>
