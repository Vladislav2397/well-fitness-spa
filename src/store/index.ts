import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Counter from '@/store/models/counter'
import Purchase from '@/store/models/purchase'

export default new Vuex.Store({
    modules: {
        count: Counter,
        purchase: Purchase,
    },
})
