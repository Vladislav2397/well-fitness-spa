import { Service } from 'typedi'

import api from '@/api'
import EquipmentGroupStore from '@/store/models/equipmentGroup'

@Service()
export default class EquipmentGroupService {
    async fetchGroups(): Promise<void> {
        if (!this.getGroups().length) {
            await EquipmentGroupStore.insert({
                data: await api.equipmentGroup.getGroups(),
            })
        }
    }

    getGroups(): any {
        return EquipmentGroupStore?.all() ?? []
    }
}
