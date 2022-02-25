// @ts-ignore
import { ActionType } from '../../helpers'

// @ts-ignore
const changeValue = ({ commit }, { field, value }): void => {
    commit('changeValue', { field, value })
}
export type ActionPurchaseChangeValue = ActionType<typeof changeValue>

const actions = {
    changeValue,
}

export default actions
