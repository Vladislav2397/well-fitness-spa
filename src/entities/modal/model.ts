import { Module } from 'vuex'

export const ACTIONS = {
    OPEN_MODAL: 'openModal',
    CLOSE_MODAL: 'closeModal',
} as const

export const MUTATIONS = {
    OPEN_MODAL: 'openModal',
    CLOSE_MODAL: 'closeModal',
} as const

export const GETTERS = {
    IS_MODAL: 'isModal',
    GET_MODAL: 'getModals',
} as const

export const module: Module<any, any> = {
    namespaced: true,
    state: () => ({
        modals: [],
    }),
    actions: {
        [ACTIONS.OPEN_MODAL]({ commit }, modalName) {
            commit('openModal', modalName)
        },
        [ACTIONS.CLOSE_MODAL]({ commit }, modalName) {
            commit('closeModal', modalName)
        },
    },
    mutations: {
        [MUTATIONS.OPEN_MODAL](state, modalName: string) {
            state.modals = [...new Set([...state.modals, modalName])]
        },
        [MUTATIONS.CLOSE_MODAL](state, modalName: string) {
            const set = new Set([...state.modals])

            set.delete(modalName)

            state.modals = [...set]
        },
    },
    getters: {
        [GETTERS.IS_MODAL](state) {
            return !!state.modals.length
        },
        [GETTERS.GET_MODAL](state) {
            return state.modals
        },
    },
}
