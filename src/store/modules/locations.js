import axios from 'axios'

import { API_PREFIX } from '../../../constants'

function createDefaultState () {
  return {
    all: []
  }
}

const mutations = {
  ADD (state, data) {
    state.all = data
  }
}

const actions = {
  async getAll ({ commit }) {
    const response = await axios.get(`${API_PREFIX}locations`)
    commit('ADD', response.data)
    return response
  }
}

export const locationsModule = {
  namespaced: true,
  state: createDefaultState(),
  mutations,
  actions
}
