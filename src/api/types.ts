export namespace API {
    export namespace GET {
        export namespace equipment {
            export interface list {
                meta: {
                    title: string,
                    type: string,
                },
                data: {
                    image: {
                        src: string
                        alt: string
                    },
                    title: string
                    list: {
                        text: string
                        count: number
                    }[]
                }[]
            }
        }
    }
}
