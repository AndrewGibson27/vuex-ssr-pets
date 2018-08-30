export default {
  computed: {
    isNotReady () {
      const notReadies = this.vuexDataKeys.filter(key => {
        const curr = this[key]
        return curr.isLoading || !curr.didComplete
      })

      return notReadies.length
    },

    didError () {
      const didErrors = this.vuexDataKeys.filter(key => (
        this[key].didError
      ))

      return didErrors.length
    }
  }
}
