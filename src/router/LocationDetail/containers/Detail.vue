<template>
  <h2>{{ detail.data.name }}</h2>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Detail',

  computed: {
    ...mapGetters({ detail: 'locationDetail/detail' })
  }
}
</script>
