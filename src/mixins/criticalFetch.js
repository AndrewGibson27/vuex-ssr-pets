export default {
  async beforeRouteUpdate (to, from, next) {
    if (this.shouldUpdate) {
      if (
        to.path === from.path &&
        !this.updateOnQueryChange
      ) {
        return next()
      }

      try {
        await this.$options.fetch(this.$store, to)
        return next()
      } catch (err) {
        return next(err)
      }
    }

    return next()
  }
}
