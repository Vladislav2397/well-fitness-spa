import 'reflect-metadata'
import Component from 'vue-class-component'

Component.registerHooks(['setup'])

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store/storeInstance'

import './global'

import useDevice, { IDevice } from '@/use/device'

Vue.config.productionTip = false

new Vue({
    setup() {
        const device = useDevice()

        return { device }
    },
    provide: (vm: Vue & { device: IDevice }) => {
        return {
            $device: vm.device,
        }
    },
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
