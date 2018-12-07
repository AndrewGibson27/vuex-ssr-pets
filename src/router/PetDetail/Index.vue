<template>
  <with-loader
    :is-loading="isLoading"
  >
    <template slot="content">
      <detail />
    </template>
  </with-loader>
</template>

<script>
import { mapActions } from 'vuex'

import clientFetch from '../../mixins/clientFetch'
import Detail from './containers/Detail.vue'
import WithLoader from '../../wrappers/WithLoader'

export default {
  name: 'PetDetail',

  components: { Detail, WithLoader },

  mixins: [clientFetch],

  methods: {
    ...mapActions({ getPetDetail: 'petDetail/get' }),

    getData ({ params: { id } }) {
      return this.getPetDetail({ id })
    }
  }
}
</script>
