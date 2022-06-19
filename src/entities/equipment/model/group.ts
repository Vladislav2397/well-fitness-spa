import {Attr, Model} from "@vuex-orm/core"
import EquipmentFamily from "./family"

export default class EquipmentGroup extends Model {
    static entity = 'equipmentGroups'

    static fields(): Record<string, Attr> {
        return {
            id: this.attr(''),
            name: this.attr(''),
            // @ts-ignore
            families: this.hasMany(EquipmentFamily, 'group_id')
        }
    }
}
