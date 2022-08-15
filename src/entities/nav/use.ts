import { reactive } from 'vue'

export default () => {
    const react = reactive({
        item: '1',
        num: 1,
    })

    const incr = () => (react.num += 1)

    return {
        react,
        incr,
    }
}
