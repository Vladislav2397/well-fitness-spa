import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import VuexORM from '@vuex-orm/core'

import { Modularity } from '@/store/plugin'

import EquipmentGroupModel from '@/store/models/equipmentGroup'
import EquipmentFamilyModel from '@/store/models/equipmentFamily'
import CustomModule from '@/store/models/custom'

Vue.use(Vuex)

const database = new VuexORM.Database()

database.register(EquipmentGroupModel)
database.register(EquipmentFamilyModel)

export default function createStore(): Store<any> {
    return new Vuex.Store({
        modules: {
            customModule: CustomModule,
        },
        plugins: [VuexORM.install(database), Modularity.init()],
    })
}

createStore()
