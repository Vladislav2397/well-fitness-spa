import { Service } from 'typedi'

import api from '@/api'

import EquipmentFamilyModel from '@/store/models/equipmentFamily'
import API from '@/api/types'

@Service()
class EquipmentFamilyService {
    async fetchFamilies() {
        if (!this.getFamilies()?.length) {
            await EquipmentFamilyModel.insert({
                data: await api.equipmentFamily.getFamilies(
                    API.equipmentGroupNames.HOME,
                ),
            })
        }
    }

    getFamilies() {
        return EquipmentFamilyModel.all()
    }
}

export default EquipmentFamilyService
