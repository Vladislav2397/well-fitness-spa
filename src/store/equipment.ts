import { Mutation, Action, State } from 'vuex-simple'
import { Inject, Injectable } from 'vue-typedi'

import { EquipmentModuleTypes } from '@/store/types'

import EquipmentService from '@/services/equipment'

@Injectable()
export default class EquipmentModule {
    @Inject()
    public equipmentService!: EquipmentService

    @State()
    public item: EquipmentModuleTypes.item = {
        brand: 'bowflex',
        images: [
            ['some/path.png', 'alt image'],
            ['some/path.png', 'alt image'],
            ['some/path.png', 'alt image'],
            ['some/path.png', 'alt image'],
        ],
        title: 'title product',
        currentImage: 0,
        stickies: [true, true, true],
        hasLiked: false,
        hasCompared: false,
        viewedCharacteristicIndexes: [0, 1, 2, 3, 4, 5],
        quantity: 3,
        hasShowRoom: true,
        price: [1_000_000, 1_099_999],
        dealerPrice: 959_000,
        bonusMoney: 0,
        totalCount: 50,
        instalmentsPrice: 16_458,
        configuration: [
            [
                'Размер, см',
                [
                    '1500x2000',
                    '1700x2000',
                    '1900x2000',
                    ['1700x2000', 1000],
                    ['2000x2000', 2000],
                ],
            ],
            ['Вес', ['150', '500', ['850', 1000]]],
            [
                'Цвет',
                [
                    '#000 Черный',
                    '#f00 Красный',
                    '#fff Белый',
                    ['#0f0 Зеленый', 1000],
                    ['#00f Синий', 2000],
                ],
            ],
        ],
        ratingFields: [
            ['Функциональность', 4],
            ['Качество', 3],
            ['Комфорт', 3],
            ['Цена', 5],
        ],
        rating: 4,
        description:
            '<div class="dark-description-block"><div class="left">Some content into block</div></div>',
        characteristics: [
            [
                'Основные характеристики',
                [
                    ['Тип дорожки', 'Домашняя'],
                    ['Бег.полотно', '1200 х 450 мм'],
                    ['Мощность двигателя', '2,0 л.с.'],
                    ['Беговое полотно', '2-х слойное'],
                    ['Производитель', 'Cardio Power'],
                ],
            ],
            [
                'Мультимедиа',
                [
                    ['Тип дорожки', 'Домашняя'],
                    ['Бег.полотно', '1200 х 450 мм'],
                    ['Мощность двигателя', '2,0 л.с.'],
                    ['Беговое полотно', '2-х слойное'],
                    ['Производитель', 'Cardio Power'],
                ],
            ],
            [
                'Дополнительные характеристики',
                [
                    ['Тип дорожки', 'Домашняя'],
                    ['Бег.полотно', '1200 х 450 мм'],
                    ['Мощность двигателя', '2,0 л.с.'],
                    ['Беговое полотно', '2-х слойное'],
                    ['Производитель', 'Cardio Power'],
                ],
            ],
        ],
        reviews: {
            grade: '4,5',
            count: 1740,
            byFields: [23, 5, 17, 8, 2],
            list: [
                {
                    user: {
                        avatar: ['', ''],
                    },
                    date: '',
                    rating: [5, [5, 5, 4, 5]],
                    text: 'Some review for this product',
                    childReview: 'Добрый день. Благодарим за ваш отзыв',
                },
            ],
        },
        delivery: {
            city: 'Москва',
            prices: [0, 0, 1000],
        },
    }

    @State()
    public list: EquipmentModuleTypes.list = [
        {
            stickies: [true, true, true],
            quantity: 3,
            characteristics: [
                ['Тип дорожки', 'Домашняя'],
                ['Бег.полотно', '1200 х 450 мм'],
                ['Мощность двигателя', '2,0 л.с.'],
                ['Беговое полотно', '2-х слойное'],
                ['Производитель', 'Cardio Power'],
            ],
            hasShowRoom: true,
            price: [100_000, 120_000],
            rating: 5,
            title: 'Беговая дорожка Bowflex G32i9',
            image: ['path/to/src.png', 'alt image'],
        },
        {
            stickies: [true, true, false],
            quantity: 2,
            characteristics: [
                ['Тип дорожки', 'Домашняя'],
                ['Бег.полотно', '1200 х 450 мм'],
                ['Мощность двигателя', '2,0 л.с.'],
                ['Беговое полотно', '2-х слойное'],
                ['Производитель', 'Cardio Power'],
            ],
            hasShowRoom: true,
            price: [100_000, 120_000],
            rating: 4,
            title: 'Беговая дорожка Bowflex G32i9',
            image: ['path/to/src.png', 'alt image'],
        },
        {
            stickies: [true, false, false],
            quantity: 1,
            characteristics: [
                ['Тип дорожки', 'Домашняя'],
                ['Бег.полотно', '1200 х 450 мм'],
                ['Мощность двигателя', '2,0 л.с.'],
                ['Беговое полотно', '2-х слойное'],
                ['Производитель', 'Cardio Power'],
            ],
            hasShowRoom: true,
            price: [100_000, 120_000],
            rating: 3,
            title: 'Беговая дорожка Bowflex G32i9',
            image: ['path/to/src.png', 'alt image'],
        },
        {
            stickies: [true, true, true],
            quantity: 0,
            characteristics: [
                ['Тип дорожки', 'Домашняя'],
                ['Бег.полотно', '1200 х 450 мм'],
                ['Мощность двигателя', '2,0 л.с.'],
                ['Беговое полотно', '2-х слойное'],
                ['Производитель', 'Cardio Power'],
            ],
            hasShowRoom: true,
            price: [100_000],
            rating: 2,
            title: 'Беговая дорожка Bowflex G32i9',
            image: ['path/to/src.png', 'alt image'],
        },
        {
            stickies: [true, true, true],
            quantity: 1,
            characteristics: [
                ['Тип дорожки', 'Домашняя'],
                ['Бег.полотно', '1200 х 450 мм'],
                ['Мощность двигателя', '2,0 л.с.'],
                ['Беговое полотно', '2-х слойное'],
                ['Производитель', 'Cardio Power'],
            ],
            hasShowRoom: true,
            price: [100_000, 120_000],
            rating: 1,
            title: 'Беговая дорожка Bowflex G32i9',
            image: ['path/to/src.png', 'alt image'],
        },
    ]

    @State()
    public meta = {
        title: '',
        type: '',
    }

    @Action()
    async fetchList(
        name: EquipmentModuleTypes.type = 'home',
    ): Promise<EquipmentModuleTypes.list> {
        try {
            return this.equipmentService.fetchList(name)
        } catch (error) {
            console.error(error)
            return new Promise(() => {
                /**/
            })
        }
    }

    @Mutation()
    updateList(payload: string): void {
        // @ts-ignore
        this._list.push(payload ?? 'unk')
    }
}
