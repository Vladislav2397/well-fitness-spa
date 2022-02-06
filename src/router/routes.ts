import { RouteConfig } from 'vue-router'

import Index from '@/components/pages/Index'
import IdeaPage from '@/components/pages/Idea.vue'
import EquipmentPage from '@/components/pages/Equipment.vue'
import EquipmentFamilyPage from '@/components/pages/EquipmentFamily.vue'
import EquipmentGroupPage from '@/components/pages/EquipmentGroup.vue'
import BrandPage from '@/components/pages/Brand.vue'

import { RouteNames } from './helpers'

export default [
    {
        path: '/',
        name: RouteNames.INDEX,
        component: Index,
    },
    {
        path: '/equipment',
        redirect: '/equipment/home',
    },
    {
        path: '/equipments/:group',
        name: RouteNames.EQUIPMENT_GROUP,
        component: EquipmentGroupPage,
        beforeEnter: (to, from, next) => {
            if (['home', 'gym'].includes(to.params.group)) {
                next()
            } else {
                next('/equipments/home')
            }
        },
    },
    {
        path: '/equipments/:group/:family',
        name: RouteNames.EQUIPMENT_FAMILY,
        component: EquipmentFamilyPage,
    },
    {
        path: '/equipments/:group/:family/:id',
        name: RouteNames.EQUIPMENT,
        component: EquipmentPage,
    },
    {
        path: '/idea',
        name: RouteNames.IDEA,
        component: IdeaPage,
    },
    {
        path: '/brands',
        name: RouteNames.BRANDS,
        component: BrandPage,
    },
    // {
    //     path: '/brands/:id',
    //     name: 'BrandDetail',
    //     component: BrandDetailPage,
    // },
    {
        path: '*',
        redirect: '/',
    },
] as Array<RouteConfig>
