import { defineStore } from 'pinia'
import { Maybe, NormalizedPool, StringNumber } from '@/types/common'
import { Equipment } from '@/entities/equipment/model'

type Category = {
    id: StringNumber
    name: string
    count: number
    equipments: Equipment['id'][]
}

export const useStore = defineStore('category', {
    state: () => ({
        pool: {},
        active: null,
    } as {
        pool: NormalizedPool<Category>,
        active: Maybe<Category>
    }),
    actions: {
        setPool(list: NormalizedPool<Category>) {
            console.log('setPool categoryStore')
            this.pool = { ...this.pool, ...list }
        },
        setActive(id: Category['id']) {
            this.active = this.pool[id]
        }
    }
})
