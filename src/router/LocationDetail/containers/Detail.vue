<template>
  <h2>{{ detail.name }}</h2>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Detail',

  computed: {
    ...mapState('locationDetail', ['detail'])
  }
}
</script>
