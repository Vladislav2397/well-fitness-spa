import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from "@vuex-orm/core"
import { modalModel } from '@/entities/modal'
import { pageBreadcrumbModel } from '@/entities/page-breadcrumb'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [
        VuexORM.install()
    ],
    modules: {
        modals: modalModel.module,
        // equipment: equipmentModel.module,
        pageBreadcrumb: pageBreadcrumbModel.module
    },
})
