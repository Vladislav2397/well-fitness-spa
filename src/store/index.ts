import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Counter from '@/store/models/counter'

export default new Vuex.Store({
    modules: {
        count: Counter,
    },
})
