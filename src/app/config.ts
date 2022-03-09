import Vue from 'vue'
import Component from 'vue-class-component'

Component.registerHooks(['setup'])

import '@/app/registerServiceWorker'

import './global/index'

Vue.config.productionTip = false
