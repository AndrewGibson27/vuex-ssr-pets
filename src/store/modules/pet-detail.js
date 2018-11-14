import axios from 'axios'

import { API_PREFIX } from '../../../constants'

function createDefaultState () {
  return {
    didComplete: false,
    didError: false,
    isLoading: false,
    data: {}
  }
}

const mutations = {
  SUCCESS (state, data) {
    Object.assign(state, {
      data,
      didError: false,
      didComplete: true,
      isLoading: false
    })
  },

  LOADING (state) {
    state.isLoading = true
  },

  ERROR (state) {
    Object.assign(state, {
      didError: true,
      didComplete: true,
      isLoading: false
    })
  }
}

const actions = {
  async get ({ commit }, { id }) {
    commit('LOADING')

    try {
      const response = await axios.get(`${API_PREFIX}pets/${id}`)
      commit('SUCCESS', response.data)
      return response
    } catch (err) {
      commit('ERROR')
    }
  }
}

const getters = {
  detail (state) {
    return state
  }
}

export const petDetailModule = {
  namespaced: true,
  state: createDefaultState(),
  getters,
  mutations,
  actions
}
