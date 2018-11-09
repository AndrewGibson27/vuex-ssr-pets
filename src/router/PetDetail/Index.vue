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

  mixins: [clientFetch],

  data () {
    return {
      shouldUpdate: true,
      updateOnQueryChange: false
    }
  },

  methods: {
    ...mapActions({ getPetDetail: 'petDetail/get' }),

    getData ({ params: { id } }) {
      return this.getPetDetail({ id })
    }
  }
}
</script>
