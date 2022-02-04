import { Service } from 'typedi'

// import api from '@/api'
import { store } from '@/store/plugin'
import { getModule } from "vuex-module-decorators"
import CustomModule from "@/store/models/custom"
import { Store } from "vuex"

@Service()
export default class CustomService {
    protected get customModule(): CustomModule {
        return getModule(CustomModule, store as Store<CustomModule>)
    }

    fetch(): void {
        console.log(this.customModule.count)
    }

    incr(): void {
        this.customModule.increment()
    }
}
