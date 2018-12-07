<template>
  <div>
    <h2>Available locations</h2>
    <list />
    <router-view></router-view>
  </div>
</template>

<script>
import List from './containers/List.vue'

import criticalRefetch from '../../mixins/criticalRefetch'

export default {
  name: 'LocationList',

  components: { List },

  mixins: [criticalRefetch],

  data () {
    return { updateOnPathChange: false }
  },

  fetch: ({ dispatch }) => dispatch('locations/getAll')
}
</script>
