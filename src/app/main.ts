import Vue from 'vue'

import router from './router'
import store from '@/store'

import App from './Index.vue'

import './config'

import useDevice, { IDevice } from '@/use/device'

const app = new Vue({
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
})

export default app
