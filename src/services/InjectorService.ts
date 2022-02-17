// @ts-ignore
import VueInject from 'vue-inject'

export default class InjectorService {
    store

    constructor(store: any) {
        this.store = store
    }

    do() {
        console.log('InjectorService.do()', this.store)
    }
}

VueInject.service(InjectorService.name, InjectorService)
