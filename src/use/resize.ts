import { onBeforeUnmount, onMounted, reactive } from 'vue'

type width = number | null

export default function (resizeHandler: () => void): any {
    const size = reactive<{
        currentWidth: width
        prevWidth: width
    }>({
        currentWidth: null,
        prevWidth: null,
    })

    onMounted(() => {
        window && window.addEventListener('resize', resizeHandler)
    })

    onBeforeUnmount(() => {
        window && window.removeEventListener('resize', resizeHandler)
    })

    return {
        size,
    }
}
