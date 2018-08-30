<template>
  <div>
    <h1>Pets home!</h1>
    <list />
    <router-view></router-view>
  </div>
</template>

<script>
import List from './containers/List.vue'

export default {
  name: 'PetsHome',

  components: { List },

  fetch: ({ dispatch }) => dispatch('allPets/getAll')
}
</script>
