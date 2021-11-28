import {
    VuexModule,
    Module,
    Mutation,
    Action,
} from 'vuex-module-decorators'
import store from './index'
import api from '@/api'
import { API } from '@/api/types'

type EquipmentType = {
    image: [src: string, alt: string],
    title: string,
    list: [name: string, count: number][]
}

@Module({
    namespaced: true,
    dynamic: true,
    store,
    name: 'EquipmentModule',
})
export default class EquipmentModule extends VuexModule {
    _list: EquipmentType[] = []
    _meta = {
        title: '',
        type: '',
    }

    get list(): EquipmentType[] {
        return this._list
    }

    @Action({ commit: 'updateList' })
    async fetchList(type: 'home' | 'gym'): Promise<API.GET.equipment.list> {
        try {
            return await api.equipment.getList(type)
        } catch (error) {
            console.error(error)
            return new Promise(() => {/**/})
        }
    }

    @Mutation
    updateList(equipmentData: API.GET.equipment.list) {
        this._meta = equipmentData.meta

        this._list = equipmentData.data.map(item => ({
            image: [
                item.image.src,
                item.image.alt,
            ],
            title: item.title,
            list: item.list.map(el => [
                el.text, el.count
            ])
        }))
    }
}
