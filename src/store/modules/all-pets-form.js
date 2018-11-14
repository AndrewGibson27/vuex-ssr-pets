function createDefaultState () {
  return {
    currBreed: '',
    currSpecies: ''
  }
}

const mutations = {
  SET_BREED (state, breed) {
    state.currBreed = breed
  },

  SET_SPECIES (state, species) {
    state.currSpecies = species
  }
}

const actions = {
  setCurrBreed ({ commit }, breed) {
    commit('SET_BREED', breed)
  },

  setCurrSpecies ({ commit }, species) {
    commit('SET_SPECIES', species)
  }
}

const getters = {
  currSpecies: state => state.currSpecies,

  currBreed: state => state.currBreed
}

export const allPetsFormModule = {
  namespaced: true,
  state: createDefaultState(),
  getters,
  mutations,
  actions
}
