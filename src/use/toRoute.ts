import { getCurrentInstance } from 'vue'
import { Dictionary } from 'vue-router/types/router'
import { RouteNamesConst } from '@/app/router/helpers'

// Not work
export const toRoute = (
    routeName: typeof RouteNamesConst[keyof typeof RouteNamesConst],
    routeParams?: Dictionary<string>,
): void => {
    const instance = getCurrentInstance()

    instance?.proxy.$root.$router.push({
        name: routeName,
        params: routeParams,
    })
}
