import { Module } from 'vuex'

enum mutationTypes {
    SET_TITLE = 'SET_TITLE',
    SET_LIST = 'SET_LIST',
    ADD_ITEM = 'ADD_ITEM',
}

type PageBreadcrumbState = {
    title: string,
    list: {
        text: string
        href: string
    }[]
}

export const module: Module<PageBreadcrumbState, any> = {
    namespaced: true,
    state: () => ({
        title: '',
        list: [],
    }),
    actions: {
        setTitle({ commit }, title) {
            commit(mutationTypes.SET_TITLE, title)
        },
        setList({commit}, list) {
            commit(mutationTypes.SET_LIST, list)
        },
        addItem({commit}, item) {
            commit(mutationTypes.ADD_ITEM, item)
        }
    },
    mutations: {
        [mutationTypes.SET_TITLE](state, title) {
            state.title = title
        },
        [mutationTypes.SET_LIST](state, list) {
            state.list = list
        },
        [mutationTypes.ADD_ITEM](state, item) {
            state.list.push(item)
        }
    },
    getters: {
        title(state) {
            return state.title
        },
        list(state) {
            return state.list
        },
    },
}
