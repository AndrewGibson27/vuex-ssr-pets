<template>
  <div id="app">
    <p v-if="error">{{ error.message }}</p>
    <p v-else-if="loading">Loading ...</p>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',

  computed: {
    ...mapState('context', ['error', 'loading'])
  }
}
</script>
