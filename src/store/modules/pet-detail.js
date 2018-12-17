import axios from 'axios'

import { API_PREFIX } from '../../../constants'

function createDefaultState () {
  return {
    detail: {}
  }
}

const mutations = {
  ADD(state, data) {
    state.detail = data
  },
}

const actions = {
  async get ({ commit }, { id }) {
    const response = await axios.get(`${API_PREFIX}pets/${id}`)
    commit('ADD', response.data)
    return response.data
  }
}

export const petDetailModule = {
  namespaced: true,
  state: createDefaultState(),
  mutations,
  actions
}
