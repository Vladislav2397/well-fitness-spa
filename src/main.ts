import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import './global'

import PortalVue from 'portal-vue'
Vue.use(PortalVue)

// @ts-ignore
import VueSimplePortal from '@linusborg/vue-simple-portal'
Vue.use(VueSimplePortal, {
    name: 'portal-simple',
    selector: '#modal-window'
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
