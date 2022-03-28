import { getCurrentInstance } from '@vue/composition-api'
import { Dictionary } from 'vue-router/types/router'
import { RouteNamesConst } from '@/app/router/helpers'

// Not work
export const toRoute = (
    routeName: typeof RouteNamesConst[keyof typeof RouteNamesConst],
    routeParams?: Dictionary<string>,
): void => {
    const instance = getCurrentInstance()

    instance?.root.proxy.$router.push({
        name: routeName,
        params: routeParams,
    })
}
