<template>
  <div
    v-if="detail.isLoading || !detail.didComplete"
  >
    Loading ...
  </div>
  <div
    v-else-if="detail.didError"
  >
    Something bad happened!
  </div>
  <div
    v-else
  >
    <h2>{{ detail.data.name }}</h2>
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
