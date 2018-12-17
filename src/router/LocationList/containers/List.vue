<template>
  <ul>
    <list-item
      v-for="location in all"
      :key="location.id"
      :location="location"
    />
  </ul>
</template>

<script>
import { mapState } from 'vuex'

import ListItem from '../components/ListItem.vue'

export default {
  name: 'List',

  components: { ListItem },

  computed: {
    ...mapState('locations', ['all'])
  }
}
</script>
