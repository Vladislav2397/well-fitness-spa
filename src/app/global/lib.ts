import Vue from 'vue'

import PortalVue from 'portal-vue'
Vue.use(PortalVue)

// @ts-ignore
import VueInjector from 'vue-inject'
Vue.use(VueInjector)

// @ts-ignore
import VueSimplePortal from '@linusborg/vue-simple-portal'
Vue.use(VueSimplePortal, {
    name: 'portal-simple',
    selector: '#modal-window',
})

// @ts-ignore
// import VueCompositionAPI from '@vue/composition-api'
// Vue.use(VueCompositionAPI)
