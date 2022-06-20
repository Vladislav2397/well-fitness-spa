import {Attr, Model} from "@vuex-orm/core"
import Category from "./category"

export default class EquipmentFamily extends Model {
    static entity = 'equipmentFamilies'

    static primaryKey = 'id'

    static fields() {
        return {
            id: this.attr(''),
            name: this.attr(''),
            group_id: this.attr(''),
            categories: this.hasMany(Category, 'family_id')
        }
    }
}
