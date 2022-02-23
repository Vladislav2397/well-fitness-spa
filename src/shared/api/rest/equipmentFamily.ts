import API from '@/api/types'
import { imageType } from '@/store/types'

export namespace equipmentFamily {
    export type list = {
        image: imageType
        title: string
        types: [name: string, count: number][]
    }

    export type getList = (type: API.equipmentGroupNames) => Promise<list[]>
}

const getFamilies: equipmentFamily.getList = (type) => {
    return new Promise((resolve) => {
        return resolve([
            {
                image: ['path/to', 'alt'],
                title: 'Title',
                types: [],
            },
            {
                image: ['path/to', 'alt'],
                title: 'Title',
                types: [],
            },
            {
                image: ['path/to', 'alt'],
                title: 'Title',
                types: [],
            },
        ])
    })
}

export default {
    getFamilies,
}
