export default {
  data () {
    return {
      updateOnPathChange: true,
      updateOnQueryChange: false,
      updateOnHashChange: false,
      isLoading: false
    }
  },

  methods: {
    queryParamsAreDifferent (to, from) {
      let different = false

      Object.keys(to.query).forEach((key) => {
        if (
          !from.query[key] ||
          from.query[key] !== to.query[key]
        ) different = true
      })

      return different
    },

    shouldRefetch (to, from) {
      if (this.updateOnPathChange && to.path !== from.path) {
        return true
      }

      if (this.updateOnHashChange && to.hash !== from.hash) {
        return true
      }

      if (
        this.updateOnQueryChange &&
        this.queryParamsAreDifferent(to, from)
      ) {
        return true
      }

      return false
    }
  }
}
