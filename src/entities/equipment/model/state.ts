import { Maybe, StringNumber } from '@/types/common'

type NormalizrList<T extends { id: StringNumber | string | number }> = Record<
    T['id'],
    T
>

export type Equipment = {
    id: StringNumber
    name: string
    image: string
    price: {
        current: string
        old: string
    }
}

export type EquipmentCategory = {
    id: StringNumber
    name: string
    count: number
    equipments: Equipment['id'][]
}

export type EquipmentFamily = {
    id: StringNumber
    name: string
    image: string
    categories: EquipmentCategory['id'][]
}

export type EquipmentState = {
    families: NormalizrList<EquipmentFamily>
    isPromo: Equipment['id'][]
    activeCategory: Maybe<Equipment['id']>
    categories: NormalizrList<EquipmentCategory>
    equipments: NormalizrList<Equipment>
    activeEquipments: Equipment['id'][]
}

export const state: () => EquipmentState = () => ({
    activeFamily: null,
    families: {
        '1': {
            id: '1',
            name: 'Кардиотренажеры',
            image: '',
            categories: ['1', '2'],
        },
    },
    activeCategory: null,
    categories: {
        '1': {
            id: '1',
            name: 'Беговая дорожка',
            count: 0,
            equipments: ['1', '2'],
        },
        '2': {
            id: '2',
            name: 'Велотренажеры',
            count: 0,
            equipments: ['3', '4'],
        },
    },
    isPromo: ['1', '3'],
    equipments: {
        '1': {
            id: '1',
            name: 'Беговая дорожка',
            image: '',
            price: {
                current: '2352',
                old: '543262',
            },
        },
        '2': {
            id: '2',
            name: 'Беговая дорожка',
            image: '',
            price: {
                current: '23252',
                old: '543262',
            },
        },
        '3': {
            id: '3',
            name: 'Беговая дорожка',
            image: '',
            price: {
                current: '23352',
                old: '543262',
            },
        },
        '4': {
            id: '4',
            name: 'Беговая дорожка',
            image: '',
            price: {
                current: '24352',
                old: '543262',
            },
        },
    },
    activeEquipments: []
})
