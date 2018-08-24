<template>
  <ul>
    <list-item
      v-for="pet in pets"
      :key="pet.id"
      :pet="pet"
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
    ...mapGetters('allPets', { pets: 'list' })
  }
}
</script>
