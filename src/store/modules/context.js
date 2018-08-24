function createDefaultState () {
  return {
    error: null,
    loading: false
  }
}

const mutations = {
  SET_ERROR (state, error) {
    state.error = error
  },

  SET_LOADING (state, loading) {
    state.loading = loading
  },

  DESTROY (state) {
    Object.assign(state, createDefaultState())
  }
}

const actions = {
  setError ({ commit }, error) {
    commit('SET_ERROR', error)
  },

  setLoading ({ commit }, loading) {
    console.log(loading)
    commit('SET_LOADING', loading)
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
