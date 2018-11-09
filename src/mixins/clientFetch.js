export default {
  mounted () {
    this.getData(this.$route)
  },

  async beforeRouteUpdate (to, from, next) {
    if (this.shouldUpdate) {
      if (
        to.path === from.path &&
        !this.updateOnQueryChange
      ) {
        return next()
      }

      await this.getData(to)
      return next()
    }

    return next()
  }
}
