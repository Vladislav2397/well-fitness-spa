import { Equipment } from './Equipment'

export interface EquipmentContainer {
    equipments: Equipment[]
}

const equipmentContainer = {
    addEquipment: (
        container: EquipmentContainer,
        equipment: Equipment,
    ): EquipmentContainer => ({
        ...container,
        equipments: [...container.equipments, equipment],
    }),

    contains: (container: EquipmentContainer, equipment: Equipment): boolean =>
        container.equipments.some(({ id }) => id === equipment.id),
}

export default equipmentContainer
