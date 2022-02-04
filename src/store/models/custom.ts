import {Action, Module, Mutation, VuexModule} from "vuex-module-decorators"

@Module({
    name: 'customModule',
    namespaced: true,
    stateFactory: true,
})
export default class CustomModule extends VuexModule {
    _counter = 0

    get count(): number {
        return this._counter
    }

    @Action
    increment(): void {
        this._increment(this.count + 1)
    }

    @Mutation
    _increment(value: number): void {
        this._counter = value
    }
}
