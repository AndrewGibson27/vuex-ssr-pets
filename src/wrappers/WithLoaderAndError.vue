<template>
  <div
    v-if="notReady"
  >
    Loading ...
  </div>
  <div
    v-else-if="hasError"
  >
    Something went terribly wrong!
  </div>
  <div
    v-else
  >
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'WithLoaderAndError',

  props: {
    dataObjects: {
      type: Array,
      required: true
    }
  },

  computed: {
    hasError () {
      const didErrors = this.dataObjects.filter(obj => (
        obj.didError
      ))
      return didErrors.length
    },

    notReady () {
      const notReadies = this.dataObjects.filter(obj => {
        return obj.isLoading || !obj.didComplete
      })
      return notReadies.length
    }
  }
}
</script>
