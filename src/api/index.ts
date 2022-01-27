import equipmentGroup from '@/api/rest/equipmentGroup'
import equipmentFamily from '@/api/rest/equipmentFamily'

/**
 * api/v1
 * - /equipments/:type(home|gym) -> { list: [
 *     { 'кардио', [...] },
 *     { 'силовые', [...] }
 * ]}
 * - /equipments/:type/:id -> { list: [
 *     { quantity: 3, hasShowRoom: true, ... }
 *     { quantity: 2, hasShowRoom: false, ... }
 *     { quantity: 1, hasShowRoom: null, ... }
 * ]}
 * - /equipments/:groups(home|gym)
 * - /equipments/:groups(home|gym)/:family/
 * - /equipments/:groups(home|gym)/:family/:id
 */

const api = {
    equipmentGroup: {
        ...equipmentGroup,
    },
    equipmentFamily: {
        ...equipmentFamily,
    },
}

export default api
