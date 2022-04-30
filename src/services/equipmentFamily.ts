// @ts-ignore
import injector from 'vue-inject'
import makeRequest from '@/shared/api/helpers/makeRequest'
import { normalize } from 'normalizr'

import {
    equipmentCategorySchema,
    equipmentFamilySchema
} from '@/schemas/equipment'

export class EquipmentFamilyService {
    store

    constructor($store: any) {
        this.store = $store
    }

    async fetchFamily(id: string | number) {
        const result = await makeRequest({
            url: `${process.env.VUE_APP_API_HOST}api/v1/groups/2/families/${id}`,
            method: 'get',
        })

        const data = normalize(result, equipmentFamilySchema)

        console.log('activeFamilies', data)

        // this.store.dispatch('equipment/setActiveFamily', id)
        // this.store.dispatch('equipment/')
    }

    async fetchActiveCategory(): Promise<void> {
        const activeCategory = this.store.getters['equipment/activeCategory']

        const result = await makeRequest({
            url: `${process.env.VUE_APP_API_HOST}api/v1/categories/${activeCategory}`,
            method: 'get',
        })

        const normalizedData = normalize(result, equipmentCategorySchema)

        await this.store.dispatch(
            'equipment/setEquipments',
            normalizedData.entities.equipment,
        )

        await this.store.dispatch(
            'equipment/setActiveEquipments',
            Object.keys(normalizedData.entities?.equipment ?? {}),
        )
    }

    async fetchActiveFamily(): Promise<void> {
        const activeFamily = this.store.getters['equipment/activeFamily']

        const result = await makeRequest({
            url: `${process.env.VUE_APP_API_HOST}api/v1/families/${activeFamily}`,
            method: 'get',
        })

        console.log('activeFamilies', result)
    }
}

injector.service('EquipmentFamily', ['$store'], EquipmentFamilyService)
