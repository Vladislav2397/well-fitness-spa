import {
    VuexModule,
    Module,
    Mutation,
    Action,
} from 'vuex-module-decorators'
import store from './index'
import api from '@/api'

interface EquipmentType {
    image: [src: string, alt: string],
    title: '',
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
    async fetchList(type: 'home' | 'gym'): Promise<any> {
        try {
            return api.getEquipmentList(type)
        } catch (error) {
            console.error(error)
        }
        return []
    }

    @Mutation
    updateList(list: any[]) {
        this._list = list.map(item => ({
            image: [
                item.image.src,
                item.image.alt,
            ],
            title: item.title,
            list: item.list.map((i: any) => [
                i.text, i.count
            ])
        }))
    }
}
