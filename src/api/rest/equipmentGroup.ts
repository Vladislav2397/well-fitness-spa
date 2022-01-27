export namespace equipmentGroup {
    export type groupList = {
        id: number
        type: string
    }[]

    export type getGroups = () => Promise<groupList>
}

const getGroups: equipmentGroup.getGroups = () => {
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
