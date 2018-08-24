import axios from 'axios'

import { API_PREFIX } from '../../../constants'

function createDefaultState () {
  return {
    data: [],
    isLoaded: false
  }
}

const mutations = {
  ADD (state, data) {
    state.data = data
  },

  SET_IS_LOADED (state, isLoaded) {
    state.isLoaded = isLoaded
  }
}

const actions = {
  async getAll ({ commit }) {
    const response = await axios.get(`${API_PREFIX}pets`)
    commit('ADD', response.data)
    commit('SET_IS_LOADED', true)
    return response
  },

  setIsLoaded ({ commit }, isLoaded) {
    commit('SET_IS_LOADED', isLoaded)
  }
}

const getters = {
  list (state) {
    return state.data
  }
}

export const allPetsModule = {
  namespaced: true,
  state: createDefaultState(),
  getters,
  mutations,
  actions
}
