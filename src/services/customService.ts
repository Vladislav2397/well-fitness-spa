// import api from '@/api'
import BaseService from '@/services/BaseService'

import { getModule } from 'vuex-module-decorators'
import CustomModule from '@/store/models/custom'

export default class CustomService extends BaseService {
    protected get customModule(): CustomModule {
        return getModule(CustomModule, this.store)
    }

    fetch(): void {
        console.log(this.customModule.count)
    }

    incr(): void {
        this.customModule.increment()
    }
}
