import { getCurrentInstance } from 'vue'

export const useStore = () => {
    const instance = getCurrentInstance()

    return instance?.proxy.$root.$store
}
