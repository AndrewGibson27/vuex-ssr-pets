<template>
  <form
    @submit="$event.preventDefault()"
    method="get"
  >
    <select-input
      :value="currSpecie"
      :options="speciesOpts"
      @callback="onUpdate"
      name="species"
    />
    <select-input
      v-if="currSpecie !== 'all'"
      :value="currBreed"
      :options="breedOpts"
      @callback="onUpdate"
      name="breed"
    />
  </form>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

import SelectInput from '../components/SelectInput'

export default {
  name: 'FilterForm',

  components: { SelectInput },

  computed: {
    ...mapState('allPets', [
      'currSpecie',
      'currBreed'
    ]),

    ...mapGetters('allPets', [
      'allSpecies',
      'breedsInSpecie'
    ]),

    speciesOpts () {
      return [
        { id: 'all', value: 'all', text: 'all' },
        ...this.allSpecies.map(({ name, id }) => ({
          id,
          value: name,
          text: name
        }))
      ]
    },

    breedOpts () {
      const choices = this.breedsInSpecie(this.currSpecie)
      return [
        { id: 'all', value: 'all', text: 'all' },
        ...choices.map(({ name, id }) => ({
          id,
          value: name,
          text: name
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
