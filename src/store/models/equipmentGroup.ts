import { TypedModelFactory } from '@/store/helper'

interface EquipmentGroupModel {
    id: number
    type: string
}

class EquipmentGroupStore extends TypedModelFactory<EquipmentGroupModel>() {
    static entity = 'equipmentGroup'

    static fields() {
        return {
            id: this.number(null),
            type: this.string(''),
        }
    }
}

export default EquipmentGroupStore
