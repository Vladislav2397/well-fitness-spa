import Vue from 'vue'
import Vuex from 'vuex'
import { createVuexStore, Module } from 'vuex-simple'
import { Container } from 'vue-typedi'

import EquipmentModule from '@/store/equipment'
import tokens from "@/store/tokens"

Vue.use(Vuex)

export class Store {
    @Module()
    public equipment = new EquipmentModule()
}

const instance = new Store()

export default createVuexStore(instance, {
    strict: false,
    modules: {},
    plugins: []
})
