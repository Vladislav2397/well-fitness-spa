import {Attr, HasMany, Model} from "@vuex-orm/core"
import Category from "./category"

export default class EquipmentFamily extends Model {
    static entity = 'equipmentFamilies'

    static primaryKey = 'id'

    @Attr(null) id!: string | number
    @Attr() name!: string
    @Attr() group_id!: string

    @HasMany(() => Category, 'family_id')
    categories!: Category[]

    static fields() {
        return {
            id: this.attr(''),
            name: this.attr(''),
            group_id: this.attr(''),
            categories: this.hasMany(Category, 'family_id')
        }
    }
}
