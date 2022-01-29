import 'reflect-metadata'
import 'vue-class-component/hooks'

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import './global'

import PortalVue from 'portal-vue'
import VueTypeDI from 'vue-typedi'
// @ts-ignore
import VueSimplePortal from '@linusborg/vue-simple-portal'
import Device, { IDevice } from '@/mixins/device'

Vue.use(PortalVue)

Vue.use(VueTypeDI)

Vue.use(VueSimplePortal, {
    name: 'portal-simple',
    selector: '#modal-window',
})

Vue.config.productionTip = false

new Vue({
    mixins: [Device],
    provide: (vm: Vue & { device: IDevice }) => {
        return {
            $device: vm.device,
        }
    },
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
