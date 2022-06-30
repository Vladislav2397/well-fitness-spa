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
}
