import { reactive } from '@vue/composition-api'

import { NotificationService } from './ports'
import useNotification from '../services/notificationAdapter'
import { Equipment } from '../core/Equipment'
import { Cart } from '../core/Cart'

const useAddToCart = () => {
    const notifier: NotificationService = useNotification()

    const cart = reactive<Cart>({ equipments: [] })

    const addToCart = (cart: Cart, equipment: Equipment) => {
        notifier.notify('Add to cart')
    }

    return {
        addToCart,
    }
}

export default useAddToCart
