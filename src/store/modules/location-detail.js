import axios from 'axios'

import { API_PREFIX } from '../../../constants'

function createDefaultState () {
  return {
    data: {}
  }
}

const mutations = {
  ADD (state, data) {
    state.data = data
  }
}

const actions = {
  async get ({ commit }, { id }) {
    const response = await axios.get(`${API_PREFIX}locations/${id}`)
    commit('ADD', response.data)
    return response
  }
}

const getters = {
  detail (state) {
    return state
  }
}

export const locationDetailModule = {
  namespaced: true,
  state: createDefaultState(),
  getters,
  mutations,
  actions
}
