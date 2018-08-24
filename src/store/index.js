import Vue from 'vue'
import Vuex from 'vuex'

import { contextModule } from './modules/context'
import { allPetsModule } from './modules/all-pets'
import { locationsModule } from './modules/locations'
import { petDetailModule } from './modules/pet-detail'

Vue.use(Vuex)

export function createStore () {
  const store = new Vuex.Store({
    modules: {
      context: contextModule,
      allPets: allPetsModule,
      locations: locationsModule,
      petDetail: petDetailModule
    },
    strict: process.env.NODE_ENV !== 'production'
  })

  return store
}
