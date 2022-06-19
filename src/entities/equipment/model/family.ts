import {Attr, Model} from "@vuex-orm/core"
import Category from "./category"

export default class EquipmentFamily extends Model {
    static entity = 'equipmentFamilies'

    static primaryKey = 'id'

    static fields(): Record<string, Attr> {
        return {
            id: this.attr(''),
            name: this.attr(''),
            group_id: this.attr(''),
            // @ts-ignore
            categories: this.hasMany(Category, 'family_id')
        }
    }
}
