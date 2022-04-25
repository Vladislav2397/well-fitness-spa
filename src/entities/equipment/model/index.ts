import { Module, Getter } from 'vuex'
import { actions } from './actions'

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

export const module: Module<EquipmentState, VuexState> = {
    namespaced: true,
    state,
    actions: {
        setEquipments({ commit }, payload) {
            commit('setEquipments', payload)
        },
        setEquipmentFamilies({ commit }, payload) {
            commit('setEquipmentFamilies', payload)
        },
        setEquipmentCategories({ commit }, payload) {
            commit('setEquipmentCategories', payload)
        },
        setActiveCategory({ commit }, payload) {
            commit('setActiveCategory', payload)
        }
    },
    mutations: {
        setEquipments(state, payload: typeof state.equipments) {
            state.equipments = {...state.equipments, ...payload}

            // Object.entries(payload).forEach(
            //     ([id, equipment]) => {
            //         state.equipments[id] = { ...equipment }
            //     }
            // )
        },
        setEquipmentFamilies(state, payload) {
            state.families = { ...state.families, ...payload }

            // Object.entries(payload).forEach(([id, family]) => {
            //     state.families[id] = { ...family }
            // })
        },
        setEquipmentCategories(state, payload) {
            state.categories = { ...state.categories, ...payload }

            // Object.entries(payload).forEach(([id, category]) => {
            //     state.categories[id] = { ...category }
            // })
        },
        setActiveCategory(state, payload) {
            state.activeCategory = payload
        }
    },
    getters: {
        families,
        activeCategory,
        equipments,
        stockEquipments,
        categories,
    },
}

export { actions }
