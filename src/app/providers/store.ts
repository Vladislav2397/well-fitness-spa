import Vue from 'vue'
import Vuex from 'vuex'
import { modalModel } from '@/entities/modal'
import { model as equipmentModel } from '@/entities/equipment'
import { pageBreadcrumbModel } from '@/entities/page-breadcrumb'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        modals: modalModel.module,
        equipment: equipmentModel.module,
        pageBreadcrumb: pageBreadcrumbModel.module
    },
})
