export default {
  async beforeRouteUpdate (to, from, next) {
    try {
      await this.$options.fetch(this.$store, to)
      next()
    } catch (err) {
      next(err)
    }
  }
}
