import {Model} from '@vuex-orm/core'

export class Brand extends Model {
    static entity = 'brand'

    static primaryKey = 'id'

    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(''),
        }
    }
}
