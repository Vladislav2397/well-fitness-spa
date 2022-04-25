// @ts-ignore
import injector from 'vue-inject'
import makeRequest from '@/shared/api/helpers/makeRequest'
import { normalize, schema } from 'normalizr'

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
        const equipmentSchema = new schema.Entity('equipment')

        const equipmentCategorySchema = new schema.Entity('equipmentCategory', {
            equipments: [equipmentSchema],
        })

        const equipmentFamilySchema = new schema.Entity('equipmentFamily', {
            categories: [equipmentCategorySchema],
        })

        const equipmentFamiliesSchema = new schema.Array(equipmentFamilySchema)

        const result = await makeRequest({
            url: `${process.env.VUE_APP_API_HOST}api/v1/groups/2/families`,
            method: 'get',
        })

        const normalizedArray = normalize(result, equipmentFamiliesSchema)

        // await this.getEquipments()

        await this.store.dispatch(
            'equipment/setEquipmentCategories',
            normalizedArray.entities.equipmentCategory,
        )

        console.log('setActiveCategory')
        
        await this.store.dispatch(
            'equipment/setActiveCategory',
            Object.keys(this.store.getters['equipment/categories'])[0]
        )
        await this.store.dispatch(
            'equipment/setEquipmentFamilies',
            normalizedArray.entities.equipmentFamily,
        )
    }
}

injector.service('EquipmentGroup', ['$store'], EquipmentGroupService)
