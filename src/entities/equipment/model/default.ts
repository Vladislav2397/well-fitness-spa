import {Attr, BelongsTo, Model} from '@vuex-orm/core'

import {Category} from "@/entities/category/model"
import EquipmentFamily from './family'

export default class Equipment extends Model {
    static entity = 'equipments'

    static fields(): Record<string, Attr | BelongsTo> {
        return {
            id: this.attr(null),
            family_id: this.attr(null),
            category_id: this.attr(null),
            family: this.belongsTo(EquipmentFamily, 'family_id'),
            category: this.belongsTo(Category, 'category_id'),
        }
    }
}
