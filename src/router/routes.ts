import { RouteConfig } from 'vue-router'

import Index from '@/components/pages/Index.vue'
import IdeaPage from '@/components/pages/Idea.vue'
import EquipmentPage from '@/components/pages/Equipment.vue'
import EquipmentTypePage from '@/components/pages/EquipmentType.vue'
import EquipmentAccessoryPage from '@/components/pages/EquipmentAccessory.vue'
import BrandPage from '@/components/pages/Brand.vue'

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
        path: '/equipment/(gym|home)/:type',
        name: 'EquipmentType',
        component: EquipmentTypePage,
    },
    {
        path: '/equipment/(gym|home)/:type/:id',
        name: 'Equipment',
        component: EquipmentPage,
    },
    {
        path: '/idea',
        name: 'Idea',
        component: IdeaPage,
    },
    {
        path: '/brands',
        name: 'Brand',
        component: BrandPage,
    },
    // {
    //     path: '/brands/:id',
    //     name: 'BrandDetail',
    //     component: BrandDetailPage,
    // },
    {
        path: '*',
        redirect: '/'
    }
] as Array<RouteConfig>
