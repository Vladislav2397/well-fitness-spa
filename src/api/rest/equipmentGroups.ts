export type groupList = {
    id: number
    type: string
}[]

async function getGroups(): Promise<groupList> {
    return new Promise((resolve) =>
        resolve([
            {
                id: 1,
                type: 'home',
            },
            {
                id: 2,
                type: 'gym',
            },
        ]),
    )
}

export default {
    getGroups,
}
