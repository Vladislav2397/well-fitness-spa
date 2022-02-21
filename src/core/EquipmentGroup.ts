import { Image, UniqueId } from './Equipment'
import { EquipmentFamily } from './EquipmentFamily'

export type EquipmentGroupTitle = string
export type Maybe<T> = T | null

export type IEquipmentGroup = {
    id: UniqueId
    title: EquipmentGroupTitle
    image: Image
    familyId: UniqueId
}

function getFamily(
    group: IEquipmentGroup,
    families: EquipmentFamily[],
): Maybe<EquipmentFamily> {
    return families.find((family) => group.id === family.id) ?? null
}
