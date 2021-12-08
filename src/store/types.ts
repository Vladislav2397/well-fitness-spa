type imageType = [src: string, alt: string]
type stickiesType = [
    isSales: boolean,
    isRecommended: boolean,
    isNew: boolean
]

export namespace EquipmentModuleTypes {
    export type item = {
        images: imageType[]
        currentImage: number,
        brand: string,
        title: string,
        stickies: stickiesType,
        hasLiked: boolean,
        hasCompared: boolean,
        viewedCharacteristicIndexes: number[],
        quantity: number,
        hasShowRoom: boolean,
        price: [oldPrice: number, newPrice: number],
        dealerPrice: number,
        bonusMoney: number,
        totalCount: number,
        instalmentsPrice: number,
        configuration: [
            name: string,
            list: (string | [name: string, addingPrice: number])[]
        ][],
        ratingFields: [name: string, count: number][],
        rating: number,
        description: string,
        characteristics: [
            name: string, list: [key: string, value: string][]
        ][],
        reviews: {
            grade: string,
            count: number,
            byFields: number[],
            list: {
                user: {
                    avatar: [src: string, alt: string]
                },
                date: string,
                rating: [common: number, fields: number[]],
                text: string,
                childReview: string,
            }[]
        },
        delivery: {
            city: string,
            prices: [
                warehouse: number, shop: number, house: number
            ]
        },
    }

    export type list = (
        Pick<
            item,
            | 'stickies'
            | 'quantity'
            | 'hasShowRoom'
            | 'title'
            | 'viewedCharacteristicIndexes'
            | 'rating'
            | 'price'
        > & {
            image: imageType
        }
    )[]
}
