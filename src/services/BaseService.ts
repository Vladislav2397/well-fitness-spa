export default abstract class BaseService {
    store!: any

    constructor(store: any) {
        this.store = store
    }
}
