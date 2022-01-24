import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'

import EquipmentGroupModel from '@/store/models/equipmentGroup'
import EquipmentFamilyModel from '@/store/models/equipmentFamily'

Vue.use(Vuex)

const database = new VuexORM.Database()

database.register(EquipmentGroupModel)
database.register(EquipmentFamilyModel)

const store = new Vuex.Store({
    plugins: [VuexORM.install(database)],
})

export default store
