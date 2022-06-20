// import { defineStore } from 'pinia'
// import { Maybe, NormalizedPool, StringNumber } from '@/types/common'
//
// export type Equipment = {
//     id: StringNumber
//     name: string
//     image: string
//     price: {
//         current: string
//         old: string
//     }
// }
//
// export type EquipmentCategory = {
//     id: StringNumber
//     name: string
//     count: number
//     equipments: Equipment['id'][]
// }
//
// export type EquipmentFamily = {
//     id: StringNumber
//     name: string
//     image: string
//     categories: EquipmentCategory['id'][]
// }
//
// // export type EquipmentState = {
// //     families: NormalizedPool<EquipmentFamily>
// //     isPromo: Equipment['id'][]
// //     activeCategory: Maybe<Equipment['id']>
// //     categories: NormalizedPool<EquipmentCategory>
// //     equipments: NormalizedPool<Equipment>
// //     activeEquipments: Equipment['id'][]
// // }
//
// export const useStore = defineStore('equipment', {
//     state: () => ({
//         pool: {},
//         active: null,
//         filtered: [],
//         promo: [],
//     } as {
//         pool: NormalizedPool<Equipment>
//         active: Maybe<Equipment['id']>
//         filtered: Equipment['id'][]
//         promo: Equipment['id'][]
//     }),
//     actions: {
//         setEquipments(payload: NormalizedPool<Equipment>) {
//             this.pool = { ...this.pool, ...payload }
//         },
//         setActiveEquipments(payload: Equipment['id']) {
//             this.active = payload
//         },
//     },
//     getters: {
//         equipmentFiltered(): Equipment[] {
//             return this.filtered.map(id => this.pool[id])
//         },
//         equipmentPromo(): Equipment[] {
//             return this.promo.map(id => this.pool[id])
//         },
//         equipmentActive(): Maybe<Equipment> {
//             return this.active ? this.pool[this.active] : null
//         }
//     },
// })
