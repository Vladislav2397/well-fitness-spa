import { TypedModelFactory } from '@/store/helper'
import { imageType } from '@/store/types'

export interface IEquipmentFamilyModel {
    image: imageType
    title: string
    list: [name: string, count: number][]
}

class EquipmentFamilyModel extends TypedModelFactory<IEquipmentFamilyModel>() {
    static entity = 'equipmentFamily'

    static fields<IEquipmentFamilyModel>() {
        return {
            image: this.attr(['', '']),
            title: this.string(''),
            list: this.attr([]),
        }
    }
}

export default EquipmentFamilyModel
