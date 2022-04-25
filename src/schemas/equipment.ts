import { schema } from 'normalizr'

export const equipmentSchema = new schema.Entity('equipment')

export const equipmentCategorySchema = new schema.Entity('equipmentCategory', {
    equipments: [equipmentSchema],
})

export const equipmentFamilySchema = new schema.Entity('equipmentFamily', {
    categories: [equipmentCategorySchema],
})

export const equipmentFamiliesSchema = new schema.Array(equipmentFamilySchema)
