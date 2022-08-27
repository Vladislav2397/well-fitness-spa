import {MEDIA_HOST} from "@/shared/config/env"

const getImageApi = (path: string): string => {
    return `${MEDIA_HOST}/${path}`
}

export default {
    getImageApi
}
