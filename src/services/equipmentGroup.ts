// @ts-ignore
import injector from 'vue-inject'
import makeRequest from '@/shared/api/helpers/makeRequest'
import { normalize, schema } from 'normalizr'
// import { categoryModel } from '@/entities/category'
import { equipmentModels } from '@/entities/equipment'

export class EquipmentGroupService {
    store

    constructor($store: any) {
        this.store = $store
    }

    // async getEquipments(): Promise<void> {
    //     const result = await makeRequest({
    //         url: `${process.env.VUE_APP_API_HOST}api/v1/groups/2/families/1/equipments`,
    //         method: 'get',
    //     })
    // }

    async initialize(): Promise<void> {
        // const categoryState = categoryModel.useStore()

        const equipmentSchema = new schema.Entity('equipment')

        const equipmentCategorySchema = new schema.Entity('equipmentCategory', {
            equipments: [equipmentSchema],
        })

        const equipmentFamilySchema = new schema.Entity('equipmentFamily', {
            categories: [equipmentCategorySchema],
        })

        const equipmentFamiliesSchema = new schema.Array(equipmentFamilySchema)


        const group = await makeRequest({
            url: `${process.env.VUE_APP_API_HOST}groups/2`,
            method: 'get',
        })

        await equipmentModels.EquipmentGroup.insertOrUpdate({
            data: {
                ...group
            }
        })

        const result = await makeRequest({
            url: `${process.env.VUE_APP_API_HOST}groups/2/families`,
            method: 'get',
        })

        const normalizedArray = normalize(result, equipmentFamiliesSchema)

        // await this.getEquipments()
        console.log('normlizedArray', normalizedArray)


        await equipmentModels.EquipmentFamily.insertOrUpdate({
            data: {
                ...normalizedArray.entities.equipmentFamily
            }
        })

        // await this.store.dispatch(
        //     'equipment/setEquipmentCategories',
        //     normalizedArray.entities.equipmentCategory,
        // )
        // await this.store.dispatch(
        //     'equipment/setActiveCategory',
        //     Object.keys(this.store.getters['equipment/categories'])[0]
        // )
        // await this.store.dispatch(
        //     'equipment/setEquipmentFamilies',
        //     normalizedArray.entities.equipmentFamily,
        // )
    }
}

injector.service('EquipmentGroup', ['$store'], EquipmentGroupService)
