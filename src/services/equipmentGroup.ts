import { Service } from 'vue-typedi'

import api from '@/api'
import {
    EquipmentGroupState,
    EquipmentGroupTypes
} from '@/store/equipmentGroup'

@Service()
export default class EquipmentGroupService {
    async fetchList(
        type: EquipmentGroupTypes
    ): Promise<EquipmentGroupState['list']> {
        const response = await api.equipment.getList(type)

        return []
        // response.data.map(item => ({
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
