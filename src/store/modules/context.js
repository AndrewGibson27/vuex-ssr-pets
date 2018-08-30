function createDefaultState () {
  return {
    error: null,
    loading: false
  }
}

const mutations = {
  SET_ERROR (state, error) {
    Object.assign(state, { error, loading: false })
  },

  SET_LOADING (state) {
    Object.assign(state, { error: null, loading: true })
  },

  DESTROY (state) {
    Object.assign(state, createDefaultState())
  }
}

const actions = {
  setError ({ commit }, error) {
    commit('SET_ERROR', error)
  },

  setLoading ({ commit }) {
    commit('SET_LOADING')
  },

  reset ({ commit }) {
    commit('DESTROY')
  }
}

export const contextModule = {
  namespaced: true,
  state: createDefaultState(),
  mutations,
  actions
}
