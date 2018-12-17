<template>
  <div>
    <h2>{{ detail.name }}</h2>
    <p>Species: {{ detail.species }}</p>
    <p>Breed: {{ detail.breed }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Detail',

  computed: {
    ...mapState('petDetail', ['detail'])
  }
}
</script>
