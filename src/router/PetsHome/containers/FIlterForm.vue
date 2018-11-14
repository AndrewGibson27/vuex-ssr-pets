<template>
  <form
    @submit="$event.preventDefault()"
    method="get"
  >
    <select-input
      :value="species"
      :options="speciesOpts"
      @callback="onUpdate"
      name="species"
    />
    <select-input
      :value="breed"
      :options="breedOpts"
      @callback="onUpdate"
      name="breed"
    />
  </form>
</template>

<script>
import { mapGetters } from 'vuex'

import SelectInput from '../components/SelectInput'

export default {
  name: 'FilterForm',

  components: { SelectInput },

  computed: {
    ...mapGetters('allPets', [
      'allSpecies',
      'allBreeds',
      'breedsInSpecies'
    ]),

    ...mapGetters('allPetsForm', [
      'currSpecies',
      'currBreed'
    ]),

    species () {
      if (
        this.currSpecies &&
        this.allSpecies.includes(this.currSpecies.toLowerCase())
      ) {
        return this.currSpecies.toLowerCase()
      }

      return 'all'
    },

    breed () {
      if (this.species === 'all') return 'all'

      const validBreeds = this.breedsInSpecies(this.species)

      if (
        this.currBreed &&
        validBreeds.includes(this.currBreed.toLowerCase())
      ) {
        return this.currBreed.toLowerCase()
      }

      return 'all'
    },

    speciesOpts () {
      return [
        { id: 0, value: 'all', name: 'all' },
        ...this.allSpecies.map((specie, idx) => ({
          id: idx + 1,
          value: specie,
          name: specie
        }))
      ]
    },

    breedOpts () {
      let choices

      if (this.species === 'all') {
        choices = this.allBreeds
      } else {
        choices = this.breedsInSpecies(this.species)
      }

      return [
        { id: 0, value: 'all', name: 'all' },
        ...choices.map((breed, idx) => ({
          id: idx + 1,
          value: breed,
          name: breed
        }))
      ]
    }
  },

  methods: {
    onUpdate (name, newVal) {
      this.$emit('updateRoute', name, newVal)
    }
  }
}
</script>
