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
    ...mapGetters('allPets', [
      'list',
      'petsInSpecies',
      'petsInBreed'
    ]),

    ...mapGetters('allPetsForm', [
      'currSpecies',
      'currBreed'
    ]),

    pets () {
      if (
        this.currSpecies === 'all' &&
        this.currBreed === 'all'
      ) {
        return this.list
      }

      if (this.currBreed === 'all') {
        return this.petsInSpecies(this.currSpecies)
      }

      return this.petsInBreed(this.currBreed)
    }
  }
}
</script>
