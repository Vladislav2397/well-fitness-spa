import {Attr, Model} from "@vuex-orm/core"

export default class EquipmentFamily extends Model {
    static entity = 'equipmentFamilies'

    static fields(): Record<string, Attr> {
        return {
            id: this.attr(''),
            name: this.attr(''),
        }
    }
}
