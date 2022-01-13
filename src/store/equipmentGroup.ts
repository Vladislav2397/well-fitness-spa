// import { Inject, Injectable } from "vue-typedi"

import { EquipmentFamilyState } from '@/store/equipmentFamily'
import { Action, State } from 'vuex-simple'
import { Inject, Injectable } from 'vue-typedi'
import tokens from '@/store/tokens'
import EquipmentGroupService from '@/services/equipmentGroup'
import equipmentGroup from '@/api/rest/equipmentGroup'

// TODO: Realise interfaces

type equipmentFamilyListItem = (
    Pick<EquipmentFamilyState, 'title' | 'preview'> & {
        theme: 'dark' | 'light' | 'base'
    }
)

@Injectable()
export default class EquipmentGroupModule {
    @Inject(tokens.EQUIPMENT_GROUP)
    equipmentGroupService!: EquipmentGroupService

    @State()
    home: equipmentFamilyListItem[] = []

    @State()
    gym: equipmentFamilyListItem[] = []

    @Action()
    fetchList() {
        // this
    }
}

export type EquipmentGroupState = {
    list: equipmentFamilyListItem[]
}

export type EquipmentGroupTypes = 'home' | 'gym'
