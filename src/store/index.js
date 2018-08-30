import Vue from 'vue'
import Vuex from 'vuex'

import { contextModule } from './modules/context'
import { allPetsModule } from './modules/all-pets'
import { locationsModule } from './modules/locations'
import { petDetailModule } from './modules/pet-detail'
import { locationDetailModule } from './modules/location-detail'

Vue.use(Vuex)

export function createStore () {
  const store = new Vuex.Store({
    modules: {
      context: contextModule,
      allPets: allPetsModule,
      locations: locationsModule,
      petDetail: petDetailModule,
      locationDetail: locationDetailModule
    },
    strict: process.env.NODE_ENV !== 'production'
  })

  return store
}
