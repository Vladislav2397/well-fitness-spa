import { Module } from 'vuex'
import { actions } from './actions'

type VuexState = {
    cards: {
        group: 'gym' | 'home'
        title: string
        href: string
        image: {
            src: string
            alt: string
        }
        theme: 'dark' | 'secondary' | 'light'
        stretch: 'horizontal' | 'vertical'
    }[]
}

type GetterType = (state: VuexState) => unknown

const equipmentForGym: GetterType = (state) => {
    return state.cards.filter((card) => card.group === 'gym')
}

const equipmentForHome: GetterType = (state) => {
    return state.cards.filter((card) => card.group === 'gym')
}

export const module: Module<VuexState, {}> = {
    state: () => ({
        cards: [],
    }),
    getters: {
        equipmentForGym,
        equipmentForHome,
    },
}

export { actions }
