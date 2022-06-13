import {Attr, Model} from "@vuex-orm/core"

export default class EquipmentGroup extends Model {
    static entity = 'equipmentGroups'

    static fields(): Record<string, Attr> {
        return {
            id: this.attr(''),
            name: this.attr(''),
        }
    }
}
