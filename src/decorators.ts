import { createDecorator } from 'vue-class-component'
import { ActionMethod, Computed, mapActions, mapState } from 'vuex'

// @ts-ignore
import VueInject from 'vue-inject'

const capitalize = (str: string, lower = false) =>
    (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
        match.toUpperCase(),
    )

export function Log() {
    return (target: any, key: any) => {
        // console.log('options', target)
        // console.log('key', key)
        //
        // console.log('Reflect', Reflect.getMetadata('design:type', target, key))

        // const serviceInstance = Reflect.getMetadata('design:type', target, key)

        return createDecorator((options, decoKey) => {
            // console.log('options', options)
            // console.log('decoKey', decoKey)
            // const service = new serviceInstance(options.store)
            // options.__injections__ = new Map<string, any>()
            // options.__injections__.set(
            //     key,
            //     () => new serviceInstance(options.store),
            // )
            // console.log('store', options.store)
            // return service
        })(target, key)
    }
}

export const Deco = createDecorator((options, key, index) => {
    console.log('Deco decorator')
    console.log('options', options)
    console.log('key', key)
    console.log('index', index)
})

// export function Action(moduleName: string) {
//     return createDecorator((options, key) => {
//         console.log('Action decorator')
//         console.log('options', options)
//
//         if (!options['methods']) {
//             options['methods'] = {}
//         }
//
//         const module = `${moduleName}/${key}`
//
//         options['methods'][key] = mapActions([module])[module]
//     })
// }

type mapActionFnType = (map: string) => ActionMethod
type mapComputedFnType = (map: string) => Computed

export const State = createDecoratorFactory('computed', mapState)
export const Action = createDecoratorFactory('methods', mapActions)

function createDecoratorFactory(
    optionsKey: 'computed' | 'methods',
    mapFn: any,
) {
    return (storeKey: string) => {
        return createDecorator((componentOptions, key) => {
            const mapObject = { [key]: storeKey }

            if (typeof componentOptions[optionsKey] === 'undefined') {
                componentOptions[optionsKey] = {}
            }

            if (typeof componentOptions[optionsKey]![key] !== 'undefined') {
                return
            }
            componentOptions[optionsKey]![key] = mapFn(mapObject)[key]
        })
    }
}
