import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Counter from '@/store/models/counter'
import Purchase from '@/store/models/purchase'
import { modalModel } from '@/entities/modal'

export type ModalNames = 'login'

export default new Vuex.Store({
    modules: {
        count: Counter,
        purchase: Purchase,
        modals: modalModel.module,
    },
})
