<template>
  <with-loader-and-error
    :data-objects="[detail]"
  >
    <template slot="content">
      <h2>{{ detail.data.name }}</h2>
      <p>Species: {{ detail.data.species }}</p>
      <p>Breed: {{ detail.data.breed }}</p>
    </template>
  </with-loader-and-error>
</template>

<script>
import { mapGetters } from 'vuex'

import WithLoaderAndError from '../../../wrappers/WithLoaderAndError.vue'

export default {
  name: 'Detail',

  components: {
    WithLoaderAndError
  },

  computed: {
    ...mapGetters({ detail: 'petDetail/detail' })
  }
}
</script>
