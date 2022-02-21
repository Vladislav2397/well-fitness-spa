// @ts-ignore
const counter = (state): number => state.counter
export type GetterCountCounter = ReturnType<typeof counter>

const getters = {
    counter,
}

export default getters
