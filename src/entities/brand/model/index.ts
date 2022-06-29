import {Attr, Model} from '@vuex-orm/core'

export class Brand extends Model {
    static entity = 'brand'

    static primaryKey = 'id'

    @Attr(null) id!: string | number
    @Attr() name!: string

    // static fields() {
    //     return {
    //         id: this.attr(null),
    //         name: this.attr(''),
    //     }
    // }
}
