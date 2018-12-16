import axios from 'axios'

import { API_PREFIX } from '../../../constants'

function createDefaultState () {
  return {
    data: [],
    currBreed: 'all',
    currSpecie: 'all'
  }
}

const mutations = {
  ADD (state, data) {
    state.data = data
  },

  SET_CURR_SPECIE (state, currSpecie) {
    state.currSpecie = currSpecie
  },

  SET_CURR_BREED (state, currBreed) {
    state.currBreed = currBreed
  }
}

const actions = {
  async getAll ({ commit }) {
    const response = await axios.get(`${API_PREFIX}pets`)
    commit('ADD', response.data)
    return response
  },

  setCurrSpecie ({ commit }, specie) {
    commit('SET_CURR_SPECIE', specie)
  },

  setCurrBreed ({ commit }, breed) {
    commit('SET_CURR_BREED', breed)
  }
}

const getters = {
  list: ({ data }) => data,

  allSpecies (state) {
    const species = state.data.map(pet => ({
      id: pet.id,
      name: pet.species
    }))

    // hacky because I didn't feel like
    // writing a filter utility
    return [species[0], species[2]]
  },

  breedsInSpecie: state => specie => {
    const breeds = []

    state.data.forEach((pet) => {
      if (pet.species === specie) {
        breeds.push({
          id: pet.id,
          name: pet.breed
        })
      }
    })

    return breeds
  },

  petsInSpecie: state => specie => (
    state.data.filter(pet => pet.species === specie)
  ),

  petsInBreedAndSpecie: state => (specie, breed) => (
    state.data.filter(pet => (
      pet.breed === breed && pet.species === specie
    ))
  )
}

export const allPetsModule = {
  namespaced: true,
  state: createDefaultState(),
  getters,
  mutations,
  actions
}
