import API from '@/api/types'
import { imageType } from '@/store/types'
import makeRequest from '@/shared/api/helpers/makeRequest'
import { StringNumber } from '@/types/common'

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

const getCategory = (id: StringNumber) =>
    makeRequest({
        url: `${process.env.VUE_APP_API_HOST}categories/${id}`,
    })

export default {
    getFamilies,
    getCategory,
}
