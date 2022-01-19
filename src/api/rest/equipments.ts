import { API } from '@/api/types'
import { EquipmentModuleTypes } from "@/store/types"

import mock from '@/api/mock/equipments'

export const getList = (
    type: EquipmentModuleTypes.type
): Promise<API.GET.equipment.list> => new Promise(
    (resolve) => {
        if (type === 'home')
            resolve(mock.homeEquipment)
        else
            resolve(mock.gymEquipment)
    }
)

export default {
    getList
}
