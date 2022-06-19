import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from "@vuex-orm/core"
import { modalModel } from '@/entities/modal'
import { pageBreadcrumbModel } from '@/entities/page-breadcrumb'
import { equipmentModels } from '@/entities/equipment'

Vue.use(Vuex)

const database = new VuexORM.Database()

database.register(equipmentModels.EquipmentCategory)
database.register(equipmentModels.EquipmentGroup)
database.register(equipmentModels.EquipmentFamily)
database.register(equipmentModels.Equipment)

export default new Vuex.Store({
    plugins: [
        VuexORM.install(database)
    ],
    modules: {
        modals: modalModel.module,
        // equipment: equipmentModel.module,
        pageBreadcrumb: pageBreadcrumbModel.module
    },
})
