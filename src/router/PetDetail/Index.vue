<template>
  <detail />
</template>

<script>
import { mapActions } from 'vuex'

import Detail from './containers/Detail.vue'

export default {
  name: 'PetDetail',

  components: { Detail },

  mounted () {
    this.getData(this.$route.params.id)
  },

  async beforeRouteUpdate (to, from, next) {
    await this.getData(to.params.id)
    next()
  },

  methods: {
    ...mapActions({ getPetDetail: 'petDetail/get' }),

    getData (id) {
      return this.getPetDetail({ id })
    }
  }
}
</script>
