export default {
  mounted () {
    this.getData(this.$route.params.id)
  },

  async beforeRouteUpdate (to, from, next) {
    await this.getData(to.params.id)
    next()
  }
}
