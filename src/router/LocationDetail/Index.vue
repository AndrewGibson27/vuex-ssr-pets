<template>
  <detail />
</template>

<script>
import Detail from './containers/Detail.vue'

export default {
  name: 'LocationDetail',

  components: { Detail },

  fetch: ({ dispatch }, { params: { id } }) => (
    dispatch('locationDetail/get', { id })
  )
}
</script>
