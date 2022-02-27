import { createDecorator } from 'vue-class-component'
import { mapActions, mapGetters } from 'vuex'

export const Getter = createDecoratorFactory('computed', mapGetters)
export const Action = createDecoratorFactory('methods', mapActions)

function createDecoratorFactory(
    optionsKey: 'computed' | 'methods',
    mapFn: any,
) {
    return (storeKey: string) => {
        return createDecorator((options, key) => {
            const mapObject = { [key]: storeKey }

            if (typeof options[optionsKey] === 'undefined') {
                options[optionsKey] = {}
            }

            if (typeof options[optionsKey]![key] !== 'undefined') {
                return
            }

            console.log(mapFn(mapObject)[key])

            options[optionsKey]![key] = mapFn(mapObject)[key]
        })
    }
}
