import { TypedModelFactory } from '@/store/helper'

interface IEquipmentFamilyModel {
    stickies: [boolean, boolean, boolean]
    quantity: number
    characteristics: [string, string][]
    hasShowRoom: boolean
    price: [newPrice: number, oldPrice?: number]
    rating: number
    title: string
    image: [string, string]
}

export default class EquipmentFamilyModel extends TypedModelFactory<IEquipmentFamilyModel>() {
    static entity = 'equipmentFamily'

    static fields() {
        return {
            stickies: this.attr([]),
            quantity: this.number(0),
            characteristics: this.attr([]),
            hasShowRoom: this.boolean(false),
            price: this.attr([0, 0]),
            rating: this.number(0),
            title: this.string(''),
            image: this.attr(['', '']),
        }
    }
}
