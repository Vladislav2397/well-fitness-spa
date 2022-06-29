import { brandModel } from "@/entities/brand"
import { Model, Attr, BelongsTo } from "@vuex-orm/core"

export default class Equipment extends Model {
    static entity = 'equipments'

    static primaryKey = 'id'

    @Attr(null) id!: string | number
    @Attr(null) name!: string
    @Attr(null) label!: string
    @Attr(null) description!: string
    @Attr(null) promotion!: string
    @Attr() category_id!: number
    @Attr(null) rating!: number
    @BelongsTo(() => brandModel.Brand, 'brand_id')
    brand_id!: number

    // static fields() {
    //     return {
    //         id: this.attr(null),
    //         name: this.string(''),
    //         label: this.string(''),
    //         description: this.string(''),
    //         promotion: this.string(''),
    //         category_id: this.number(null),
    //         rating: this.number(null),
    //         brand_id: this.belongsTo(brandModel.Brand, 'brand_id'),
    //     }
    // }
}
