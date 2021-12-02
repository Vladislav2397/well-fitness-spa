import equipment from '@/api/rest/equipments'

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
*/

export default {
    equipment: {
        ...equipment
    }
}
