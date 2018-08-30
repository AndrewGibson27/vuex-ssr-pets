<template>
  <detail />
</template>

<script>
import universalFetch from '../../mixins/universalFetch'
import Detail from './containers/Detail.vue'

export default {
  name: 'LocationDetail',

  components: { Detail },

  mixins: [
    universalFetch
  ],

  fetch: ({ dispatch }, { params: { id } }) => (
    dispatch('locationDetail/get', { id })
  )
}
</script>
