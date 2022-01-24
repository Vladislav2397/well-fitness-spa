import { API } from '@/api/types'
import equipment from '../mock/equipmentFamily'
import { EquipmentModuleTypes } from '@/store/types'

export function getList(
    type: EquipmentModuleTypes.type,
): Promise<API.GET.equipment.list> {
    return new Promise((resolve) => {
        return resolve({
            meta: equipment.metaEquipment,
            data: equipment.listEquipment,
        })
    })
}

export default {
    getList,
}
