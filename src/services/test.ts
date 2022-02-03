export default class TestService {
    store!: any

    constructor(store = {}) {
        this.store = store
    }
}
