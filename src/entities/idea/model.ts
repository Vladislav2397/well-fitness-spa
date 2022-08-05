import {Attr, Model} from "@vuex-orm/core"

export class Idea extends Model {
    static entity = 'ideas'

    static primaryKey = 'id'

    @Attr(null) id!: string | number
    @Attr() name!: string
    @Attr() image!: string
}
