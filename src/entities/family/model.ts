import { defineStore } from 'pinia'
import { Maybe, NormalizedPool, StringNumber } from '@/types/common'
import makeRequest from '@/shared/api/helpers/makeRequest'
import { normalize } from 'normalizr'
import { familySchema } from '@/schemas/equipment'
import { EquipmentCategory } from '@/entities/equipment'

export type Family = {
    id: StringNumber
    name: string
    image: string
    categories: EquipmentCategory['id'][]
}

export const useStore = defineStore('family', {
    state: () => ({
        pool: {},
        active: null,
    } as {
        pool: NormalizedPool<Family>,
        active: Maybe<Family['id']>
    }),
    actions: {
        async fetchFamily(
            group: string | number,
            id: string | number
        ) {
            const result = await makeRequest({
                url: `${process.env.VUE_APP_API_HOST}groups/${group === 'gym' ? 2 : 1}/families/${id}`,
                method: 'get',
            })
            const normalizedData = normalize(result, familySchema)

            this.setPool(
                normalizedData.entities.equipmentFamily as NormalizedPool<Family>
            )

            this.active = normalizedData.result
        },
        setPool(list: NormalizedPool<Family>) {
            this.pool = { ...this.pool, ...list }
        },
        setActive(id: Family['id']) {
            this.active = id
        }
    },
    getters: {
        activeFamily(): Maybe<Family> {
            return this.pool[this.active ?? '0'] ?? null
        }
    }
})
