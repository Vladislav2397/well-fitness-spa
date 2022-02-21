import { IEquipmentGroup } from './EquipmentGroup'

export type Image = {
    src: string
    alt: string
}

export type UniqueId = string
export type Rating = 0 | 1 | 2 | 3 | 4 | 5
export type Price = [newPrice: string, oldPrice: string]

type EquipmentQuantity = 0 | 1 | 2 | 3
type EquipmentHasShowRoom = boolean
type EquipmentTitle = string

export type Equipment = {
    id: UniqueId
    image: Image
    quantity: EquipmentQuantity
    hasShowRoom: EquipmentHasShowRoom
    title: EquipmentTitle
    rating: Rating
    price: Price
    groupId: UniqueId
    familyId: UniqueId
}

function getGroup(equipment: Equipment, groups: IEquipmentGroup[]) {
    return groups.find(({ id }) => id === equipment.groupId)
}

function getFamily(equipment: Equipment, families: IEquipmentGroup[]) {
    return families.find(({ id }) => id === equipment.familyId)
}
