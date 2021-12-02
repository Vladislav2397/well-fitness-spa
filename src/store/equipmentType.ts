import {
    VuexModule,
    Module,
    Mutation,
    Action,
} from 'vuex-module-decorators'
import store from './index'
import api from '@/api'
import { API } from '@/api/types'

type ProductType = {
    quantity: 0 | 1 | 2 | 3,
    hasShowRoom: boolean,
    title: string,
    rating: 0 | 1 | 2 | 3 | 4 | 5,
    price: [newPrice: number, oldPrice: number],
}

@Module({
    namespaced: true,
    dynamic: true,
    store,
    name: 'EquipmentTypeModule',
})
export default class EquipmentTypeModule extends VuexModule {
    _list: ProductType[] = [
        {
            quantity: 3,
            hasShowRoom: true,
            title: "Беговая дорожка CardioPower S35",
            rating: 5,
            price: [133000, 140000],
        },
        {
            quantity: 3,
            hasShowRoom: true,
            title: "Беговая дорожка CardioPower S35",
            rating: 5,
            price: [133000, 140000],
        },
        {
            quantity: 3,
            hasShowRoom: true,
            title: "Беговая дорожка CardioPower S35",
            rating: 5,
            price: [133000, 140000],
        },
        {
            quantity: 3,
            hasShowRoom: true,
            title: "Беговая дорожка CardioPower S35",
            rating: 5,
            price: [133000, 140000],
        },
        {
            quantity: 3,
            hasShowRoom: true,
            title: "Беговая дорожка CardioPower S35",
            rating: 5,
            price: [133000, 140000],
        },
    ]
    _meta = {
        title: '',
        type: '',
    }

    get list(): ProductType[] {
        return this._list
    }

    get meta() {
        return this._meta
    }
}
