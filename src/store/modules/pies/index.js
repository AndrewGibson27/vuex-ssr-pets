import Vue from 'vue'

import fetchAll from './queries'

function createDefaultState () {
  return {
    loading: false,
    error: false,
    data: {}
  }
}

const mutations = {
  SET_ERROR (state, error) {
    state.error = error
  },

  DESTROY (state) {
    Object.assign(state, createDefaultState())
  }
}

const actions = {
  async fetchAll () {
    const all = await fetchAll()
    // commit needed
    return all
  }
}

export const contextModule = {
  namespaced: true,
  state: createDefaultState,
  mutations,
  actions
}
