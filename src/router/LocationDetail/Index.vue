<template>
  <detail />
</template>

<script>
import Detail from './containers/Detail.vue'
import criticalRefetch from '../../mixins/criticalRefetch'

export default {
  name: 'LocationDetail',

  components: { Detail },

  mixins: [criticalRefetch],

  fetch: ({ dispatch }, { params: { id } }) => (
    dispatch('locationDetail/get', { id })
  )
}
</script>
