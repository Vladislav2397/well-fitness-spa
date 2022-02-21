import { reactive } from '@vue/composition-api'
import { Cart } from '../core/Cart'

interface CartStorageService {
    cart: Cart
    updateCart(cart: Cart): void
    cleanCart(): void
}

const useCartStorage = () => reactive<Cart>({ equipments: [] })

export default useCartStorage
