import {Model} from '@vuex-orm/core'

export default class Equipment extends Model {
    static entity = 'equipments'

    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(''),
            label: this.attr(''),
            description: this.attr(''),
            promotion: this.attr(''),
            category_id: this.attr(null),
        }
    }
}
