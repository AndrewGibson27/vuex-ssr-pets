<template>
  <detail />
</template>

<script>
import criticalFetch from '../../mixins/criticalFetch'
import Detail from './containers/Detail.vue'

export default {
  name: 'LocationDetail',

  components: { Detail },

  mixins: [criticalFetch],

  data () {
    return {
      shouldUpdate: true,
      updateOnQueryChange: false
    }
  },

  fetch: ({ dispatch }, { params: { id } }) => (
    dispatch('locationDetail/get', { id })
  )
}
</script>
