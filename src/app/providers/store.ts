import Vuex from 'vuex'
import { modalModel } from '@/entities/modal'

export default new Vuex.Store({
    modules: {
        modals: modalModel.module,
    },
})
