import { EquipmentModuleTypes } from '@/store/types'

import { equipmentGroup as equipmentGroupNamespace } from '@/api/rest/equipmentGroup'
import { equipmentFamily as equipmentFamilyNamespace } from '@/api/rest/equipmentFamily'

namespace API {
    export enum equipmentGroupNames {
        HOME = 'home',
        GYM = 'gym',
    }

    export namespace GET {
        export import equipmentGroup = equipmentGroupNamespace
        export import equipmentFamily = equipmentFamilyNamespace

        export namespace equipment {
            type equipmentListItem = EquipmentModuleTypes.list[number]

            export type list = {
                meta: {
                    title: string
                    type: string
                }
                data: {
                    stickies: equipmentListItem['stickies']
                    quantity: number
                    characteristics: equipmentListItem['characteristics']
                    hasShowRoom: boolean
                    price: equipmentListItem['price']
                    rating: number
                    title: string
                    image: equipmentListItem['image']
                }[]
            }
        }
    }
}

export default API
