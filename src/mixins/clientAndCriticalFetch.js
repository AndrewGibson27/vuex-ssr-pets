export default {
  async beforeRouteUpdate (to, from, next) {
    try {
      await Promise.all([
        this.getData(to.params.id),
        this.$options.fetch(this.$store, to)
      ])
      next()
    } catch (err) {
      next(err)
    }
  }
}
