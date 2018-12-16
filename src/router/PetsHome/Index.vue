<template>
  <div>
    <h1>Pets home!</h1>
    <filter-form
      @updateRoute="updateRoute"
    />
    <list />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import List from './containers/List.vue'
import FilterForm from './containers/FilterForm.vue'

export default {
  name: 'PetsHome',

  components: { List, FilterForm },

  beforeRouteUpdate (to, from, next) {
    const { species, breed } = to.query
    this.setCurrSpecieAndBreed(species, breed)
    next()
  },

  mounted () {
    const { species, breed } = this.$route.query
    this.setCurrSpecieAndBreed(species, breed)
  },

  fetch: ({ dispatch }) => dispatch('allPets/getAll'),

  methods: {
    ...mapActions('allPets', [
      'setCurrBreed',
      'setCurrSpecie'
    ]),

    updateRoute (paramName, paramValue) {
      let query

      if (paramName === 'species') {
        query = {
          species: paramValue,
          breed: 'all'
        }
      } else {
        query = {
          ...this.$route.query,
          breed: paramValue
        }
      }

      this.$router.push({ query })
    },

    setCurrSpecieAndBreed (currSpecie, currBreed) {
      if (currSpecie) this.setCurrSpecie(currSpecie)
      if (currBreed) this.setCurrBreed(currBreed)
    }
  }
}
</script>
