import { Service } from "typedi"
import api from '@/api'

import { EquipmentGroupTypes } from "@/store/equipmentGroup"

@Service()
export default class EquipmentGroupService {
    async fetchList(
        type: EquipmentGroupTypes.cardsTypes
    ): Promise<any> {
        const response = await api.equipment.getList(type)

        return new Promise(
            (resolve) => {
                if (type === 'home')
                    resolve({
                        meta: {
                            title: 'Для дома',
                            type: 'home',
                        },
                        data: [
                            {
                                image: {
                                    src: '',
                                    alt: '',
                                },
                                title: 'Кардиотренажеры',
                                list: [
                                    {
                                        text: 'Кардиотренажеры',
                                        count: 57
                                    },
                                    {
                                        text: 'Эллиптические тренажеры',
                                        count: 2
                                    },
                                    {
                                        text: 'Велотренажеры',
                                        count: 2
                                    },
                                    {
                                        text: 'Лестницы и степперы',
                                        count: 2
                                    },
                                    {
                                        text: 'Гребные тренажеры',
                                        count: 2
                                    },
                                    {
                                        text: 'Сайклинг',
                                        count: 2
                                    },
                                ]
                            },
                            {
                                image: {
                                    src: '',
                                    alt: '',
                                },
                                title: 'Силовые тренажеры',
                                list: [
                                    {
                                        text: 'Грузоблочные',
                                        count: 57
                                    },
                                    {
                                        text: 'Нагружаемые дисками',
                                        count: 2
                                    },
                                    {
                                        text: 'Мультистанции',
                                        count: 2
                                    },
                                    {
                                        text: 'Рамы и комплексы',
                                        count: 2
                                    },
                                    {
                                        text: 'Скамьи, стойки',
                                        count: 2
                                    },
                                ]
                            },
                            {
                                image: {
                                    src: '',
                                    alt: '',
                                },
                                title: 'Функциональный тренинг',
                                list: [
                                    {
                                        text: 'Комплексы для ФТ',
                                        count: 57
                                    },
                                    {
                                        text: 'Горнолыжные тренажеры',
                                        count: 2
                                    },
                                    {
                                        text: 'Slide&FIT',
                                        count: 2
                                    },
                                    {
                                        text: 'Рамы и комплексы',
                                        count: 2
                                    },
                                    {
                                        text: 'Скамьи, стойки',
                                        count: 2
                                    },
                                ]
                            },
                            {
                                image: {
                                    src: '',
                                    alt: '',
                                },
                                title: 'Силовые тренажеры',
                                list: [
                                    {
                                        text: 'Грузоблочные',
                                        count: 57
                                    },
                                    {
                                        text: 'Нагружаемые дисками',
                                        count: 2
                                    },
                                    {
                                        text: 'Мультистанции',
                                        count: 2
                                    },
                                    {
                                        text: 'Рамы и комплексы',
                                        count: 2
                                    },
                                ]
                            },
                            {
                                image: {
                                    src: '',
                                    alt: '',
                                },
                                title: 'Силовые тренажеры',
                                list: [
                                    {
                                        text: 'Грузоблочные',
                                        count: 57
                                    },
                                    {
                                        text: 'Нагружаемые дисками',
                                        count: 2
                                    },
                                    {
                                        text: 'Мультистанции',
                                        count: 2
                                    },
                                ]
                            },
                            {
                                image: {
                                    src: '',
                                    alt: '',
                                },
                                title: 'Силовые тренажеры',
                                list: [
                                    {
                                        text: 'Бесконтактные гидромассажные ванны',
                                        count: 57
                                    },
                                    {
                                        text: 'Нагружаемые дисками',
                                        count: 2
                                    },
                                    {
                                        text: 'Мультистанции',
                                        count: 2
                                    },
                                    {
                                        text: 'Рамы и комплексы',
                                        count: 2
                                    },
                                ]
                            },
                            {
                                image: {
                                    src: '',
                                    alt: '',
                                },
                                title: 'Силовые тренажеры',
                                list: [
                                    {
                                        text: 'Грузоблочные',
                                        count: 57
                                    },
                                    {
                                        text: 'Нагружаемые дисками',
                                        count: 2
                                    },
                                    {
                                        text: 'Мультистанции',
                                        count: 2
                                    },
                                ]
                            },
                            {
                                image: {
                                    src: '',
                                    alt: '',
                                },
                                title: 'Силовые тренажеры',
                                list: [
                                    {
                                        text: 'Грузоблочные',
                                        count: 57
                                    },
                                ]
                            },
                            {
                                image: {
                                    src: '',
                                    alt: '',
                                },
                                title: 'Силовые тренажеры',
                                list: []
                            },
                        ]
                    })
                else
                    resolve({
                        meta: {
                            title: 'Для фитнес клубов',
                            type: 'gym'
                        },
                        data: [
                            {
                                image: {
                                    src: '',
                                    alt: '',
                                },
                                title: 'Силовые тренажеры',
                                list: [
                                    {
                                        text: 'Грузоблочные',
                                        count: 57
                                    },
                                    {
                                        text: 'Нагружаемые дисками',
                                        count: 2
                                    },
                                    {
                                        text: 'Мультистанции',
                                        count: 2
                                    },
                                    {
                                        text: 'Рамы и комплексы',
                                        count: 2
                                    },
                                    {
                                        text: 'Скамьи, стойки',
                                        count: 2
                                    },
                                ]
                            },
                            {
                                image: {
                                    src: '',
                                    alt: '',
                                },
                                title: 'Силовые тренажеры',
                                list: [
                                    {
                                        text: 'Грузоблочные',
                                        count: 57
                                    },
                                ]
                            },
                            {
                                image: {
                                    src: '',
                                    alt: '',
                                },
                                title: 'Силовые тренажеры',
                                list: [
                                    {
                                        text: 'Грузоблочные',
                                        count: 57
                                    },
                                    {
                                        text: 'Нагружаемые дисками',
                                        count: 2
                                    },
                                    {
                                        text: 'Мультистанции',
                                        count: 2
                                    },
                                    {
                                        text: 'Рамы и комплексы',
                                        count: 2
                                    },
                                    {
                                        text: 'Скамьи, стойки',
                                        count: 2
                                    },
                                ]
                            },
                            {
                                image: {
                                    src: '',
                                    alt: '',
                                },
                                title: 'Кардиотренажеры',
                                list: [
                                    {
                                        text: 'Кардиотренажеры',
                                        count: 57
                                    },
                                    {
                                        text: 'Эллиптические тренажеры',
                                        count: 2
                                    },
                                    {
                                        text: 'Велотренажеры',
                                        count: 2
                                    },
                                    {
                                        text: 'Лестницы и степперы',
                                        count: 2
                                    },
                                    {
                                        text: 'Гребные тренажеры',
                                        count: 2
                                    },
                                    {
                                        text: 'Сайклинг',
                                        count: 2
                                    },
                                ]
                            },
                            {
                                image: {
                                    src: '',
                                    alt: '',
                                },
                                title: 'Для фитнес клуба',
                                list: [
                                    {
                                        text: 'Грузоблочные',
                                        count: 57
                                    },
                                    {
                                        text: 'Нагружаемые дисками',
                                        count: 2
                                    },
                                    {
                                        text: 'Мультистанции',
                                        count: 2
                                    },
                                    {
                                        text: 'Рамы и комплексы',
                                        count: 2
                                    },
                                ]
                            },
                            {
                                image: {
                                    src: '',
                                    alt: '',
                                },
                                title: 'Силовые тренажеры',
                                list: [
                                    {
                                        text: 'Грузоблочные',
                                        count: 57
                                    },
                                    {
                                        text: 'Нагружаемые дисками',
                                        count: 2
                                    },
                                    {
                                        text: 'Мультистанции',
                                        count: 2
                                    },
                                    {
                                        text: 'Рамы и комплексы',
                                        count: 2
                                    },
                                    {
                                        text: 'Скамьи, стойки',
                                        count: 2
                                    },
                                ]
                            },
                            {
                                image: {
                                    src: '',
                                    alt: '',
                                },
                                title: 'Функциональный тренинг',
                                list: [
                                    {
                                        text: 'Комплексы для ФТ',
                                        count: 57
                                    },
                                    {
                                        text: 'Горнолыжные тренажеры',
                                        count: 2
                                    },
                                    {
                                        text: 'Slide&FIT',
                                        count: 2
                                    },
                                    {
                                        text: 'Рамы и комплексы',
                                        count: 2
                                    },
                                    {
                                        text: 'Скамьи, стойки',
                                        count: 2
                                    },
                                ]
                            },
                            {
                                image: {
                                    src: '',
                                    alt: '',
                                },
                                title: 'Силовые тренажеры',
                                list: [
                                    {
                                        text: 'Грузоблочные',
                                        count: 57
                                    },
                                    {
                                        text: 'Нагружаемые дисками',
                                        count: 2
                                    },
                                    {
                                        text: 'Мультистанции',
                                        count: 2
                                    },
                                ]
                            },
                            {
                                image: {
                                    src: '',
                                    alt: '',
                                },
                                title: 'Силовые тренажеры',
                                list: [
                                    {
                                        text: 'Грузоблочные',
                                        count: 57
                                    },
                                    {
                                        text: 'Нагружаемые дисками',
                                        count: 2
                                    },
                                    {
                                        text: 'Мультистанции',
                                        count: 2
                                    },
                                    {
                                        text: 'Рамы и комплексы',
                                        count: 2
                                    },
                                    {
                                        text: 'Скамьи, стойки',
                                        count: 2
                                    },
                                ]
                            },
                            {
                                image: {
                                    src: '',
                                    alt: '',
                                },
                                title: 'Силовые тренажеры',
                                list: [
                                    {
                                        text: 'Бесконтактные гидромассажные ванны',
                                        count: 57
                                    },
                                    {
                                        text: 'Нагружаемые дисками',
                                        count: 2
                                    },
                                    {
                                        text: 'Мультистанции',
                                        count: 2
                                    },
                                    {
                                        text: 'Рамы и комплексы',
                                        count: 2
                                    },
                                ]
                            },
                            {
                                image: {
                                    src: '',
                                    alt: '',
                                },
                                title: 'Силовые тренажеры',
                                list: [
                                    {
                                        text: 'Грузоблочные',
                                        count: 57
                                    },
                                    {
                                        text: 'Нагружаемые дисками',
                                        count: 2
                                    },
                                    {
                                        text: 'Мультистанции',
                                        count: 2
                                    },
                                ]
                            },
                            {
                                image: {
                                    src: '',
                                    alt: '',
                                },
                                title: 'Силовые тренажеры',
                                list: []
                            },
                        ]
                    })
            }
        )

        return [
            {
                title: 'item 1',
                theme: 'light',
                preview: ['src', 'alt']
            },
            {
                title: 'item 2',
                theme: 'base',
                preview: ['src', 'alt']
            }
        ]
    }
}
