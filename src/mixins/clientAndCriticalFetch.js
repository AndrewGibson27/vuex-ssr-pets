export default {
  mounted () {
    this.getData(this.$route)
  },

  async beforeRouteUpdate (to, from, next) {
    if (this.shouldUpdate) {
      const pathsAreEqual = to.path === from.path
      const {
        updateClientFetchOnQueryChange,
        updateCriticalFetchOnQueryChange
      } = this

      if (
        pathsAreEqual &&
        !updateClientFetchOnQueryChange &&
        !updateCriticalFetchOnQueryChange
      ) {
        return next()
      }

      if (
        pathsAreEqual &&
        updateClientFetchOnQueryChange
      ) {
        await this.getData(to)
        return next()
      }

      if (
        pathsAreEqual &&
        updateCriticalFetchOnQueryChange
      ) {
        try {
          await this.$options.fetch(this.$store, to)
          return next()
        } catch (err) {
          return next(err)
        }
      }

      try {
        await Promise.all([
          this.getData(to),
          this.$options.fetch(this.$store, to)
        ])
        return next()
      } catch (err) {
        return next(err)
      }
    }

    return next()
  }
}
