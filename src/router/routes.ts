import { RouteConfig } from 'vue-router'

import Index from '@/components/pages/Index.vue'
import IdeaPage from '@/components/pages/Idea.vue'
import EquipmentPage from '@/components/pages/Equipment.vue'
import EquipmentFamilyPage from '@/components/pages/EquipmentFamily.vue'
import EquipmentGroupPage from '@/components/pages/EquipmentGroup.vue'
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
        path: '/equipments/:group',
        name: 'EquipmentGroup',
        component: EquipmentGroupPage,
        beforeEnter: (to, from, next) => {
            if (['home', 'gym'].includes(to.params.group)) {
                next()
            } else {
                next('/equipments/home')
            }
        }
    },
    {
        path: '/equipments/:group/:family',
        name: 'EquipmentFamily',
        component: EquipmentFamilyPage,
    },
    {
        path: '/equipments/:group/:family/:id',
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
