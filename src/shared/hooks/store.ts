import { getCurrentInstance } from '@vue/composition-api'

export const useStore = () => {
    const instance = getCurrentInstance()

    return instance?.root.proxy.$store
}
