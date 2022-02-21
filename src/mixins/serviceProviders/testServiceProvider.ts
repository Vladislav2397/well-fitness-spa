import { Component, Vue } from 'vue-property-decorator'
import InjectorService from '../../services/InjectorService'

type custom<N> = { services: () => Record<string, unknown> }

@Component({
    // created(): void {
    //     if (this.services) {
    //         console.log('Vue.mixin created()')
    //         // @ts-ignore
    //         const services = this.services()
    //
    //         Object.entries(services).forEach(([name, Service]) => {
    //             // @ts-ignore
    //             this[name] = new Service(this.$store)
    //         })
    //     }
    // },
    // provide: {
    //     // InjectorService: this.injectorService,
    // },
})
export default class TestServiceProvider extends Vue {}
