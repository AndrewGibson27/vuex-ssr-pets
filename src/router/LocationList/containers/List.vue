<template>
  <ul>
    <list-item
      v-for="location in locations"
      :key="location.id"
      :location="location"
    />
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

import ListItem from '../components/ListItem.vue'

export default {
  name: 'List',

  components: { ListItem },

  computed: {
    ...mapGetters('locations', { locations: 'list' })
  }
}
</script>
