<template>
  <ul v-if="pets.length">
    <list-item
      v-for="pet in pets"
      :key="pet.id"
      :pet="pet"
    />
  </ul>
  <p v-else>No pets match this criteria. Sorry!</p>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

import ListItem from '../components/ListItem.vue'

export default {
  name: 'List',

  components: { ListItem },

  computed: {
    ...mapState('allPets', [
      'currSpecie',
      'currBreed'
    ]),

    ...mapGetters('allPets', [
      'list',
      'petsInSpecie',
      'petsInBreedAndSpecie'
    ]),

    pets () {
      if (this.currSpecie === 'all') {
        return this.list
      }

      if (this.currBreed === 'all') {
        return this.petsInSpecie(this.currSpecie)
      }

      return this.petsInBreedAndSpecie(this.currSpecie, this.currBreed)
    }
  }
}
</script>
