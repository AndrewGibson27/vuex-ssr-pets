<template>
  <div>
    <h2>{{ detail.data.name }}</h2>
    <p>Species: {{ detail.data.species }}</p>
    <p>Breed: {{ detail.data.breed }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Detail',

  computed: {
    ...mapGetters({ detail: 'petDetail/detail' })
  }
}
</script>
