<template>
  <div>
    <h2>Available locations</h2>
    <list />
    <router-view></router-view>
  </div>
</template>

<script>
import List from './containers/List.vue'

export default {
  name: 'LocationList',

  components: { List },

  fetch: ({ dispatch }) => dispatch('locations/getAll')
}
</script>
