import { Cart } from '@/entities/cart'
import { Equipment } from '@/entities/equipment'
import { Repository } from '@vuex-orm/core'

class BaseService {
    store

    constructor(store: {
        dispatch: (namespace: string, payload: any) => Promise<void>
    }) {
        this.store = store
    }
}

export class CartService extends BaseService {
    cart

    constructor(store: BaseService['store'], cart: Repository<Cart>) {
        super(store)
        this.cart = cart
    }

    async add(equipment: Equipment): Promise<void> {
        this.cart.save(equipment)
    }

    async remove(equipment: Equipment): Promise<void> {
        this.cart.save(equipment)
    }
}
