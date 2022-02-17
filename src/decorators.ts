import { createDecorator } from 'vue-class-component'

// @ts-ignore
import VueInject from 'vue-inject'

const capitalize = (str: string, lower = false) =>
    (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
        match.toUpperCase(),
    )

export function Log() {
    return (target: any, key: any) => {
        console.log('options', target)
        console.log('key', key)

        console.log('Reflect', Reflect.getMetadata('design:type', target, key))

        const serviceInstance = Reflect.getMetadata('design:type', target, key)

        return createDecorator((options, decoKey) => {
            console.log('options', options)
            console.log('decoKey', decoKey)

            const service = new serviceInstance(options.store)

            options.__injections__ = new Map<string, any>()
            options.__injections__.set(
                key,
                () => new serviceInstance(options.store),
            )

            console.log('store', options.store)

            return service
        })(target, key)
    }
}

export function Deco() {
    return (target: any, propertyName: string, index?: number) => {
        console.log('Deco')

        console.log('target', target)
        console.log('propertyName', propertyName)
        console.log('index', index)

        return createDecorator((options) => {
            console.log('createDecorator')

            console.log('options', options)
        })
    }
}
