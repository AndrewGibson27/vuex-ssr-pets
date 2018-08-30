<template>
  <detail />
</template>

<script>
import { mapActions } from 'vuex'

import clientFetch from '../../mixins/clientFetch'
import Detail from './containers/Detail.vue'

export default {
  name: 'PetDetail',

  components: { Detail },

  mixins: [
    clientFetch
  ],

  methods: {
    ...mapActions({ getPetDetail: 'petDetail/get' }),

    getData (id) {
      return this.getPetDetail({ id })
    }
  }
}
</script>
