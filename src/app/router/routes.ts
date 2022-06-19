import {RouteConfig} from 'vue-router'

import {Index} from '@/pages/Main'
import {EquipmentGroup} from '@/pages/EquipmentGroup'
import {EquipmentFamily} from '@/pages/EquipmentFamily'

import IdeaPage from '@/components/pages/Idea.vue'


import TestPage from '@/components/pages/Test.vue'
import Test2Page from '@/pages/Test2.vue'

import {RouteNames} from './helpers'
import { PageBreadcrumbView } from '@/widgets/PageBreadcrumbView'
import {LastVisitedView} from '@/widgets/LastVisitedView'

export default [
    {
        path: '/',
        name: RouteNames.INDEX,
        component: Index,
    },
    {
        path: '/',
        component: PageBreadcrumbView,
        children: [
            {
                path: 'equipments',
                component: LastVisitedView,
                redirect: '/equipments/gym',
                children: [
                    {
                        path: ':group(gym|home)',
                        name: RouteNames.EQUIPMENT_GROUP,
                        component: EquipmentGroup,
                    },
                    {
                        path: ':group(gym|home)/:family',
                        name: RouteNames.EQUIPMENT_FAMILY,
                        component: EquipmentFamily,
                    },
                    {
                        path: '/ideas',
                        name: RouteNames.IDEA,
                        component: IdeaPage,
                    },
                ],
            },
        ],
    },
    // {
    //     path: '/equipments/:group/:family',
    //     name: RouteNames.EQUIPMENT_FAMILY,
    //     component: EquipmentFamilyPage,
    // },
    // {
    //     path: '/equipments/:group/:family/:id',
    //     name: RouteNames.EQUIPMENT,
    //     component: EquipmentPage,
    // },
    // {
    //     path: '/brands',
    //     name: RouteNames.BRANDS,
    //     component: BrandPage,
    // },
    // {
    //     path: '/brands/:id',
    //     name: 'BrandDetail',
    //     component: BrandDetailPage,
    // },
    {
        path: '/test',
        name: RouteNames.TEST,
        component: TestPage,
    },
    {
        path: '/test2',
        name: RouteNames.TEST2,
        component: Test2Page,
    },
    {
        path: '*',
        redirect: '/',
    },
] as Array<RouteConfig>
