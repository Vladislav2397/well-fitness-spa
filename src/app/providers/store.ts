import Vue from 'vue'
import Vuex from 'vuex'
import { modalModel } from '@/entities/modal'
import { model as equipmentModel } from '@/entities/equipment'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        modals: modalModel.module,
        equipment: equipmentModel.module,
    },
})
