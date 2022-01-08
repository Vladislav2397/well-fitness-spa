import {
    VuexModule,
    Module,
    Action,
    Mutation,
    getModule,
} from 'vuex-module-decorators'
import { Container } from "vue-typedi"

import store from '@/store'

import { EquipmentFamilyTypes } from "@/store/equipmentFamily"

import EquipmentGroupService from "@/services/equipmentGroup"

const equipmentGroupService = Container.get(EquipmentGroupService)

@Module({
    name: 'equipmentGroup',
    dynamic: true,
    store
})
export default class EquipmentGroup extends VuexModule {

    public cards: EquipmentGroupTypes.cards = {
        home: [],
        gym: [],
    }

    @Action({ commit: 'setCardItems' })
    async setCards(
        type: EquipmentGroupTypes.cardsTypes
    ): Promise<unknown> {
        const items = await equipmentGroupService.fetchList(type)

        return { type, items }
    }

    @Mutation
    setCardItems(
        payload: {
            type: EquipmentGroupTypes.cardsTypes,
            items: EquipmentGroupTypes.group[]
        }
    ): void {
        this.cards[payload.type] = payload.items
    }
}

export const EquipmentGroupModule = getModule(EquipmentGroup, store)

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace EquipmentGroupTypes {
    export type cardsTypes = keyof cards

    export type group = (
        Pick<EquipmentFamilyTypes.state, 'title' | 'preview'> & {
            theme: 'dark' | 'light' | 'base',
        }
    )

    export type cards = {
        home: group[],
        gym: group[]
    }
}
