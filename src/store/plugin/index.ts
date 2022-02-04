import {Plugin, Store} from 'vuex'

let storeInstance!: Store<any>

export namespace Modularity {
    export const init: () => Plugin<any> = () => {
        console.log('init store plugin')
        return store => {
            storeInstance = store
        }
    }
}

export {
    storeInstance as store
}
