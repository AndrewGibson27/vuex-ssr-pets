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

  async beforeRouteUpdate (to, from, next) {
    const { breed, species } = to.query
    if (breed) this.setCurrBreed(breed)
    if (species) this.setCurrSpecies(species)
    next()
  },

  fetch: ({ dispatch }) => dispatch('allPets/getAll'),

  methods: {
    ...mapActions('allPetsForm', [
      'setCurrBreed',
      'setCurrSpecies'
    ]),

    updateRoute (paramName, paramValue) {
      let query

      if (paramName === 'species') {
        query = {
          [paramName]: paramValue,
          breed: 'all'
        }
      } else {
        query = {
          ...this.$route.query,
          [paramName]: paramValue
        }
      }

      this.$router.push({ query })
    }
  }
}
</script>
