import { HasMany, Model } from '@vuex-orm/core'
import { Equipment } from '@/entities/equipment'

export class Cart extends Model {
    static entity = 'cart'

    static primaryKey = 'id'

    @HasMany(() => Equipment, 'id') equipments!: Equipment[]
}
