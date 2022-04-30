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

            options[optionsKey]![key] = mapFn(mapObject)[key]
        })
    }
}

export const Service = (serviceName: string) =>
    createDecorator((options, key) => {
        if (!('dependencies' in options)) {
            options['dependencies'] = {}
        }

        options.dependencies[key] = serviceName
    })
