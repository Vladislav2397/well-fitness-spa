import { Equipment, EquipmentCategory, EquipmentFamily } from './model'
import { EquipmentPreview } from './ui/EquipmentPreview'
import { EquipmentStockCard } from './ui/EquipmentStockCard'
import { EquipmentFamilyCard } from './ui/EquipmentFamilyCard'
import { EquipmentCard } from './ui/EquipmentCard'
// import * as model from './model'
import * as equipmentModel from './model'
// @ts-ignore
import * as equipmentModels from './model/index.ts'

export {
    EquipmentCard,
    EquipmentPreview,
    EquipmentStockCard,
    EquipmentFamilyCard,
    // model,
    equipmentModel,
    equipmentModels,
    EquipmentFamily,
    EquipmentCategory,
    Equipment,
}
