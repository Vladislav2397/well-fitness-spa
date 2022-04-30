import { defineStore } from 'pinia'
import { Maybe, NormalizedPool } from '@/types/common'

type Category = {
    id: `${number}`
    name: string
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
