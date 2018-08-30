<template>
  <div
    v-if="isNotReady"
  >
    Loading ...
  </div>
  <div
    v-else-if="didError"
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

import loadingAndError from '../../../mixins/loadingAndError'

export default {
  name: 'Detail',

  mixins: [
    loadingAndError
  ],

  data () {
    return {
      vuexDataKeys: ['detail']
    }
  },

  computed: {
    ...mapGetters({ detail: 'petDetail/detail' })
  }
}
</script>
