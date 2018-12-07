import axios from 'axios'

import { API_PREFIX } from '../../../constants'

function createDefaultState () {
  return {
    data: []
  }
}

const mutations = {
  ADD (state, data) {
    state.isLoading = false
    state.data = data
  }
}

const actions = {
  async getAll ({ commit }) {
    const response = await axios.get(`${API_PREFIX}pets`)
    commit('ADD', response.data)
    return response
  }
}

const getters = {
  list (state) {
    return state.data
  },

  allSpecies (state) {
    const species = []
    state.data.forEach((pet) => {
      if (!species.includes(pet.species)) {
        species.push(pet.species)
      }
    })
    return species
  },

  allBreeds (state) {
    const breeds = []
    state.data.forEach((pet) => {
      if (!breeds.includes(pet.breed)) {
        breeds.push(pet.breed)
      }
    })
    return breeds
  },

  breedsInSpecies: state => specie => {
    const breeds = []
    state.data.forEach((pet) => {
      if (pet.species === specie &&
        !breeds.includes(pet.breed)
      ) {
        breeds.push(pet.breed)
      }
    })
    return breeds
  },

  petsInSpecies: state => species => {
    return state.data.filter(pet => pet.species === species)
  },

  petsInBreed: state => breed => {
    return state.data.filter(pet => pet.breed === breed)
  }
}

export const allPetsModule = {
  namespaced: true,
  state: createDefaultState(),
  getters,
  mutations,
  actions
}
