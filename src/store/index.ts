import Vue from 'vue'
import Vuex from 'vuex'
import { createVuexStore, Module } from 'vuex-simple'

import EquipmentModule from '@/store/equipment'
import EquipmentFamilyModule from "@/store/equipmentFamily"

Vue.use(Vuex)

export class Store {
    @Module()
    public equipment = new EquipmentModule()

    @Module()
    public equipmentFamily = new EquipmentFamilyModule()
}

const instance = new Store()

export default createVuexStore(instance, {
    strict: false,
    modules: {},
    plugins: []
})
