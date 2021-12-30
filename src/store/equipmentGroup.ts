// import { Inject, Injectable } from "vue-typedi"

import { EquipmentFamilyTypes } from "@/store/equipmentFamily"
import { State } from "vuex-simple"

// TODO: Realise interfaces

export default class EquipmentGroupModule {
    @State()
    public cards: EquipmentGroupTypes.cards = []
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace EquipmentGroupTypes {
    export type cards = (
        Pick<EquipmentFamilyTypes.state, 'title' | 'preview'> & {
            theme: 'dark' | 'light' | 'base'
        }
    )[]

    export type type = 'home' | 'gym'
}
