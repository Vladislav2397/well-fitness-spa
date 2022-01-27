import {
    Collection,
    Collections,
    InstanceOf,
    Item,
    Model,
} from '@vuex-orm/core'
import { Insert } from '@vuex-orm/core/dist/src/modules/payloads/Actions'

export function TypedModelFactory<TAttrs>() {
    class TypedModel extends Model {
        static all<T extends typeof Model>(
            this: T,
        ): Collection<InstanceOf<T> & TAttrs> {
            // notice InstanceOf<T> & TAttrs
            return super.all() as any
        }

        static find<T extends typeof Model>(
            this: T,
            id: string | number | (number | string)[],
        ): Item<InstanceOf<T> & TAttrs> {
            return super.find(id) as any
        }

        static insert(
            payload: Insert | { data: TAttrs[] },
        ): Promise<Collections> {
            return super.insert(payload)
        }

        static fields(): Record<keyof TAttrs, any> {
            return super.fields() as any
        }

        // ... and other finder methods that I need
    }
    return TypedModel
}
