import api from '@/shared/api'

type EquipmentType = {
    id: number
    name: string
    rating: number
}

export const getEquipments = (): Promise<EquipmentType[]> =>
    new Promise((resolve) =>
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    name: 'Bowflex X-167',
                    rating: 4,
                },
                {
                    id: 2,
                    name: 'Bowflex X-166',
                    rating: 3,
                },
                {
                    id: 3,
                    name: 'Bowflex X-165',
                    rating: 1,
                },
                {
                    id: 4,
                    name: 'Bowflex X-161',
                    rating: 5,
                },
                {
                    id: 5,
                    name: 'Bowflex X-157',
                    rating: 2,
                },
            ])
        }, 300),
    )

export const store = {
    async dispatch(namespace: string, payload: any): Promise<void> {
        /**/
    },
}

export class Equipment implements EquipmentType {
    id = 1
    name = ''
    rating = 4
}

export class EquipmentList {
    equipments: Equipment['id'][] = []

    add(equipment: Equipment): void {
        this.equipments.push(equipment.id)
    }
    remove(equipment: Equipment): void {
        this.equipments = this.equipments.filter((id) => id !== equipment.id)
    }
}

export class Cart {
    equipments = new EquipmentList()
}

export class Favorite {
    equipments = new EquipmentList()
}

export class BaseService {
    store

    constructor(store: {
        dispatch: (namespace: string, payload: any) => Promise<void>
    }) {
        this.store = store
    }
}

export class CartService extends BaseService {
    cart

    constructor(store: BaseService['store'], cart: Cart) {
        super(store)

        this.cart = cart
    }

    async add(equipment: Equipment): Promise<void> {
        await this.store.dispatch('cart/addEquipment', equipment.id)
        this.cart.equipments.add(equipment)
    }

    async remove(equipment: Equipment): Promise<void> {
        await this.store.dispatch('cart/removeEquipment', equipment.id)
        this.cart.equipments.remove(equipment)
    }
}

export class FavoriteService extends BaseService {
    favorite

    constructor(store: BaseService['store'], favorite: Favorite) {
        super(store)
        this.favorite = favorite
    }

    async add(equipment: Equipment): Promise<void> {
        await this.store.dispatch('favorite/addEquipment', equipment.id)
        this.favorite.equipments.add(equipment)
    }

    async remove(equipment: Equipment): Promise<void> {
        await this.store.dispatch('favorite/removeEquipment', equipment.id)
        this.favorite.equipments.remove(equipment)
    }
}
