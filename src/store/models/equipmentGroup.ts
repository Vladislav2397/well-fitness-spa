import { TypedModelFactory } from '@/store/helper'

interface IEquipmentGroupModel {
    id: number
    type: string
}

export default class EquipmentGroupModel extends TypedModelFactory<IEquipmentGroupModel>() {
    static entity = 'equipmentGroup'

    static fields() {
        return {
            id: this.number(null),
            type: this.string(''),
        }
    }
}
