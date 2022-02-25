// @ts-ignore
const changeValue = (state, { field, value }) => {
    state.fields[field] = value
}

const mutations = {
    changeValue,
}

export default mutations
