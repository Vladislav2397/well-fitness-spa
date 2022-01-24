import { EquipmentModuleTypes } from '@/store/types'

export namespace API {
    export namespace GET {
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
