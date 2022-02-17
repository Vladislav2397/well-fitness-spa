import Vue from 'vue'

import PortalVue from 'portal-vue'
Vue.use(PortalVue)

import VueTypeDI from 'vue-typedi'
Vue.use(VueTypeDI)

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
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)

// import VueFlex from '@/components/blanks/VueFlex.vue'

import Button from '@/components/ui/Button'
import Link from '@/components/ui/Link.vue'
import Avatar from '@/components/ui/Avatar.vue'

// Vue.component('vue-flex-component', VueFlex)

Vue.component('button-component', Button)
Vue.component('link-component', Link)
Vue.component('avatar-component', Avatar)
