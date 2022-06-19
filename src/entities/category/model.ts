import { Model } from "@vuex-orm/core"

export class Category extends Model {
    static entity = 'categories'

    static fields() {
        return {
            id: this.attr(null),
            name: this.string(''),
            family_id: this.attr(null)
        }
    }
}
