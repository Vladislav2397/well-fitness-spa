export type ActionType<F> = F extends (
    state: infer S,
    payload: infer P,
) => infer R
    ? (payload?: P) => Promise<R>
    : never
// @ts-ignore
const increment = ({ commit }): void => {
    commit('increment')
}
export type ActionCountIncrement = ActionType<typeof increment>

const actions = {
    increment,
}

export default actions
