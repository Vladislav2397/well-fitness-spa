// @ts-ignore
const fields = (state): number => state.fields
export type GetterCountCounter = ReturnType<typeof fields>

const getters = {
    fields,
}

export default getters
