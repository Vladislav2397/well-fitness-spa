import { Equipment, EquipmentCategory, EquipmentFamily } from './model/index'
import { EquipmentPreview } from './ui/EquipmentPreview'
import { EquipmentStockCard } from './ui/EquipmentStockCard'
import { EquipmentFamilyCard } from './ui/EquipmentFamilyCard'
import { EquipmentCard } from './ui/EquipmentCard'
import { CatalogCard as EquipmentCatalogCard } from './ui/CatalogCard'
// import * as model from './model'
// @ts-ignore
import * as equipmentModel from './model.ts'
// @ts-ignore
import * as equipmentModels from './model/index.ts'

export {
    EquipmentCard,
    EquipmentPreview,
    EquipmentStockCard,
    EquipmentFamilyCard,
    EquipmentCatalogCard,
    // model,
    equipmentModel,
    equipmentModels,
    EquipmentFamily,
    EquipmentCategory,
    Equipment,
}
