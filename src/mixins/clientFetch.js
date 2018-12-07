import routeMixin from './route'

export default {
  mixins: [routeMixin],

  async mounted () {
    this.isLoading = true

    try {
      await this.getData(this.$route)
    } catch (err) {
      this.$store.dispatch('context/setError', {
        message: 'Something has gone terribly wrong',
        status: 500
      })
    } finally {
      this.isLoading = false
    }
  },

  async beforeRouteUpdate (to, from, next) {
    if (this.shouldRefetch) {
      this.isLoading = true

      try {
        await this.getData(to)
        next()
      } catch (err) {
        next(err)
      } finally {
        this.isLoading = false
      }
    }

    next()
  }
}
