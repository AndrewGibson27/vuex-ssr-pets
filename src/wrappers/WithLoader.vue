<template>
  <div
    v-if="isLoading"
  >
    Loading ...
  </div>
  <div
    v-else
  >
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'WithLoader',

  props: {
    isLoading: {
      type: Boolean,
      required: true
    }
  }
}
</script>
