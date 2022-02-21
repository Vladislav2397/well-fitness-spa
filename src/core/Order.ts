import { Price, UniqueId } from './Equipment'
import { Cart } from './Cart'

export type DateTimeString = string

export type Order = {
    equipment: UniqueId
    cart: Cart
    created: DateTimeString
    status: 'new' | 'delivery' | 'completed'
    total: Price
}
