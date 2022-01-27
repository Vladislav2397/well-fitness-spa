const state = () => ({
    equipmentGroups: [
        {
            id: 1,
            type: 'home',
        },
        {
            id: 2,
            type: 'gym',
        },
    ],
})

export default state

type State = ReturnType<typeof state>

export const equipmentGroups = {
    HOME: state().equipmentGroups[0].id,
    GYM: state().equipmentGroups[0].id,
}
