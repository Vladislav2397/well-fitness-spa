import { Equipment, EquipmentCategory, EquipmentFamily, EquipmentGroup } from './model'
import { EquipmentPreview } from './ui/EquipmentPreview'
import { EquipmentStockCard } from './ui/EquipmentStockCard'
import { EquipmentFamilyCard } from './ui/EquipmentFamilyCard'
import { EquipmentCard } from './ui/EquipmentCard'
import { CatalogCard as EquipmentCatalogCard } from './ui/CatalogCard'

// FIXME: Remove
import * as equipmentModels from './model'

import {
    Equipment as EquipmentModel,
    EquipmentFamily as EquipmentFamilyModel,
    EquipmentCategory as EquipmentCategoryModel,
} from './model'
// =============

export {
    EquipmentCard,
    EquipmentPreview,
    EquipmentStockCard,
    EquipmentFamilyCard,
    EquipmentCatalogCard,
    equipmentModels,
    EquipmentModel,
    EquipmentFamilyModel,
    EquipmentCategoryModel,
    EquipmentFamily,
    EquipmentCategory,
    EquipmentGroup,
    Equipment,
}
