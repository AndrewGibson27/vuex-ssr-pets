<template>
  <li>
    <router-link
      :to="{ name: 'pet-detail', params: { id: pet.id }}"
    >
      {{ pet.name }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'ListItem',

  props: {
    pet: {
      type: Object,
      required: true
    }
  }
}
</script>
