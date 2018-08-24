<template>
  <li>
    <router-link
      :to="{ name: 'location-detail', params: { id: location.id }}"
    >
      {{ location.name }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'ListItem',

  props: {
    location: {
      type: Object,
      required: true
    }
  }
}
</script>
