// @ts-ignore
import injector from 'vue-inject'
import { equipmentModels } from '@/entities/equipment'

import { request, gql } from 'graphql-request'

export class EquipmentGroupService {
    store

    constructor($store: any) {
        this.store = $store
    }

    async initialize(): Promise<void> {

        // await equipmentModels.EquipmentCategory.insert({
        //     data: [
        //         ...categories.map((category: any) => ({
        //             id: category.id,
        //             name: category.name,
        //             family_id: category.family.id,
        //             count: category.count,
        //         }))
        //     ]
        // })
        //
        // await equipmentModels.EquipmentFamily.insert({
        //     data: families.map((family: any) => ({
        //         id: family.id,
        //         name: family.name,
        //         categories: family.categories?.map((id: number) => ({
        //             ...categories.find((category: any) => category.id === id)
        //         }))
        //     }))
        // })
    }
}

injector.service('EquipmentGroup', ['$store'], EquipmentGroupService)
