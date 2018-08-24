<template>
  <div>
    <h1>Pets home!</h1>
    <list />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import List from './containers/List.vue'

export default {
  name: 'PetsHome',

  components: { List },

  fetch (store) {
    const { isLoaded } = store.state.allPets
    if (isLoaded) return false
    return store.dispatch('allPets/getAll')
  },

  beforeRouteLeave () {
    this.setIsLoaded(false)
  },

  methods: {
    ...mapActions(['allPets/setIsLoaded'])
  }
}
</script>
