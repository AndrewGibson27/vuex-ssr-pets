import axios from 'axios'

import { API_PREFIX } from '../../../constants'

function createDefaultState () {
  return {
    data: []
  }
}

const mutations = {
  ADD (state, data) {
    state.data = data
  }
}

const actions = {
  async getAll ({ commit }) {
    const response = await axios.get(`${API_PREFIX}locations`)
    commit('ADD', response.data)
    return response
  }
}

const getters = {
  list (state) {
    return state.data
  }
}

export const locationsModule = {
  namespaced: true,
  state: createDefaultState(),
  getters,
  mutations,
  actions
}
