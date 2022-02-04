import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'

import { Modularity } from '@/store/plugin'

import EquipmentGroupModel from '@/store/models/equipmentGroup'
import EquipmentFamilyModel from '@/store/models/equipmentFamily'

Vue.use(Vuex)

const database = new VuexORM.Database()

database.register(EquipmentGroupModel)
database.register(EquipmentFamilyModel)

import CustomModule from "@/store/models/custom"

const store = new Vuex.Store({
    modules: {
        customModule: CustomModule
    },
    plugins: [
        VuexORM.install(database),
        Modularity.init(),
    ],
})

export default store
