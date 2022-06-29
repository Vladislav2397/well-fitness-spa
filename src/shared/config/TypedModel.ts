// vuex-orm-typed-model-factory.ts
import {Collection, InstanceOf, Item, Model} from "@vuex-orm/core"

export function TypedModelFactory<TAttrs>() {
    class TypedModel extends Model {
        static all<T extends typeof Model>(
            this: T
        ): Collection<InstanceOf<T> & TAttrs> { // notice InstanceOf<T> & TAttrs
            return super.all() as any;
        }

        static fields<T extends typeof Model>(
            this: T, id: string | number | (number | string)[]
        ): Item<InstanceOf<T> & TAttrs> {
            return super.fields() as any;
        }

        static find<T extends typeof Model>(
            this: T, id: string | number | (number | string)[]
        ): Item<InstanceOf<T> & TAttrs> {
            return super.find(id) as any;
        }

        // ... and other finder methods that I need

    }
    return TypedModel
}
