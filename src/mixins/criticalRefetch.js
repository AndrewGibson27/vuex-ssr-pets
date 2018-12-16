import routeMixin from './route'

export default {
  mixins: [routeMixin],

  async beforeRouteUpdate (to, from, next) {
    if (this.shouldRefetch(to, from)) {
      this.isLoading = true

      try {
        await this.$options.fetch(this.$store, to)
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
