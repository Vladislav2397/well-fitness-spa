import { RouteConfig } from 'vue-router'

import Index from '@/components/pages/Index.vue'
import EquipmentPage from '@/components/pages/EquipmentHome.vue'
import EquipmentGymPage from '@/components/pages/EquipmentGym.vue'
import IdeaPage from '@/components/pages/Idea.vue'
import EquipmentTypePage from '@/components/pages/EquipmentType.vue'
import EquipmentAccessoryPage from '@/components/pages/EquipmentAccessory.vue'

export default [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/equipment',
        redirect: '/equipment/home',
    },
    {
        path: '/equipment/:type',
        name: 'EquipmentHome',
        component: EquipmentAccessoryPage,
        beforeEnter: (to, from, next) => {
            if (['home', 'gym'].includes(to.params.type)) {
                next()
            } else {
                next('/')
            }
        }
    },
    {
        path: '/equipment/(gym|home)/:id',
        name: 'EquipmentType',
        component: EquipmentTypePage,
    },
    {
        path: '/idea',
        name: 'Idea',
        component: IdeaPage,
    },
    {
        path: '*',
        redirect: '/'
    }
] as Array<RouteConfig>
