<template>
  <detail />
</template>

<script>
import { mapActions } from 'vuex'

import Detail from './containers/Detail.vue'

export default {
  name: 'LocationDetail',

  components: { Detail },

  async beforeRouteUpdate (to, from, next) {
    const { params: { id } } = to
    try {
      await this.getLocationDetail({ id })
      next()
    } catch (err) {
      next(err)
    }
  },

  fetch ({ dispatch }, { params: { id } }) {
    return dispatch('locationDetail/get', { id })
  },

  methods: {
    ...mapActions({ getLocationDetail: 'locationDetail/get' })
  }
}
</script>
