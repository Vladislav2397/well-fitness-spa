// @ts-ignore
import { Service } from 'vue-typedi'

import api from '@/api'
import { EquipmentModuleTypes } from '@/store/types'

@Service()
export default class EquipmentService {
    async fetchList(
        type: EquipmentModuleTypes.type,
    ): Promise<EquipmentModuleTypes.list> {
        const response = await api.equipmentGroup.getGroups()

        return new Promise((resolve) => resolve([]))
        // return response.data.map(item => ({
        //     title: item.title,
        //     image: [item.image.src, item.image.alt],
        //     characteristics: item.list.map(characteristic => [
        //         characteristic.text,
        //         `${characteristic.count}`
        //     ]),
        //     hasShowRoom: false,
        //     price: [110000, 120000],
        //     quantity: 2,
        //     rating: 4,
        //     stickies: [true, true, true]
        // }))
    }
}
