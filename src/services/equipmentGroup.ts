import { Service } from 'typedi'

import api from '@/api'
import EquipmentGroupModel from '@/store/models/equipmentGroup'

@Service()
export default class EquipmentGroupService {
    async fetchGroups(): Promise<void> {
        if (!EquipmentGroupModel?.all()?.length) {
            await EquipmentGroupModel.insert({
                data: await api.equipmentGroup.getGroups(),
            })
        }
    }

    getGroups() {
        return EquipmentGroupModel.all()
    }
}
