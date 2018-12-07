import axios from 'axios'

import { API_PREFIX } from '../../../constants'

function createDefaultState () {
  return {
    data: {}
  }
}

const mutations = {
  SUCCESS (state, data) {
    state.data = data
  }
}

const actions = {
  async get ({ commit }, { id }) {
    const response = await axios.get(`${API_PREFIX}pets/${id}`)
    commit('SUCCESS', response.data)
    return response.data
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
