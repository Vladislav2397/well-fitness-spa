import { Model } from "@vuex-orm/core"
import Equipment from './default'

export default class EquipmentCategory extends Model {
    static entity = 'categories'

    static primaryKey = 'id'

    static fields() {
        return {
            id: this.attr(null),
            name: this.string(''),
            count: this.attr(''),
            family_id: this.attr(''),
            equipments: this.hasMany(Equipment, 'category_id')
        }
    }
}
