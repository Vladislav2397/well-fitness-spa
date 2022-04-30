export type StringNumber = `${number}`

export type Maybe<T> = T | null

export type Image = {
    src: string
    alt: string
}

export type NormalizedPool<T extends { id: StringNumber }> = Record<T['id'], T>
