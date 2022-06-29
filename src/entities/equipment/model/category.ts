import {Attr, HasMany, Model} from "@vuex-orm/core"
import Equipment from './default'

export default class EquipmentCategory extends Model {
    static entity = 'categories'

    static primaryKey = 'id'

    @Attr(null) id!: string | number
    @Attr() name!: string
    @Attr() count!: string | number
    @Attr() family_id!: number

    @HasMany(() => Equipment, 'category_id')
    equipments!: Equipment[]

    // static fields() {
    //     return {
    //         id: this.attr(null),
    //         name: this.string(''),
    //         count: this.attr(''),
    //         family_id: this.attr(''),
    //         equipments: this.hasMany(Equipment, 'category_id')
    //     }
    // }
}
