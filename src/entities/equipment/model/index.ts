import { Module, Getter } from 'vuex'

import { state, EquipmentState } from './state'

type VuexState = {
    //
}

type GetterType = Getter<EquipmentState, VuexState>

const families: GetterType = (state) => state.families

const categories: GetterType = (state) => state.categories

const activeCategory: GetterType = (state) => state.activeCategory ?? Object.keys(state.categories)[0]

const stockEquipments: GetterType = (state) => {
    const result: typeof state.equipments = {}

    state.isPromo.forEach((id) => {
        result[id] = state.equipments[id]
    })

    return result
}

const equipments: GetterType = (state) => state.equipments

const activeEquipments: GetterType = (state) => state.activeEquipments ?? []

export const module: Module<EquipmentState, VuexState> = {
    namespaced: true,
    state,
    actions: {
        setEquipments({ commit }, payload) {
            commit('setEquipments', payload)
        },
        setActiveEquipments({ commit }, payload) {
            commit('setActiveEquipments', payload)
        },
        setEquipmentFamilies({ commit }, payload) {
            commit('setEquipmentFamilies', payload)
        },
        setEquipmentCategories({ commit }, payload) {
            commit('setEquipmentCategories', payload)
        },
        setActiveCategory({ commit }, payload) {
            console.log('setActiveCategoryAction', payload)
            commit('setActiveCategory', payload)
        }
    },
    mutations: {
        setEquipments(state, payload: typeof state.equipments) {
            state.equipments = {...state.equipments, ...payload}
        },
        setActiveEquipments(state, payload) {
            state.activeEquipments = [ ...payload ]
        },
        setEquipmentFamilies(state, payload) {
            state.families = { ...state.families, ...payload }
        },
        setEquipmentCategories(state, payload) {
            state.categories = { ...state.categories, ...payload }
        },
        setActiveCategory(state, payload) {
            state.activeCategory = payload
        }
    },
    getters: {
        families,
        activeCategory,
        equipments,
        activeEquipments,
        stockEquipments,
        categories,
    },
}
