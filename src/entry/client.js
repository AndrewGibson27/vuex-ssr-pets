import { createApp } from './app'

const { app, router, store } = createApp()

if (window.__INITIAL_STATE__) store.replaceState(window.__INITIAL_STATE__)

router.onError(() => {
  const message = 'Something went terribly wrong'
  store.dispatch('context/setError', { message, status: 500 })
})

router.onReady(() => {
  router.beforeResolve(async (to, from, next) => {
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)

    let diffed = false
    const activated = matched.filter(
      (c, i) => diffed || (diffed = prevMatched[i] !== c || !!c.refetch)
    )
    const hooks = activated.map(c => c.fetch).filter(fetch => !!fetch)

    if (!hooks.length) return next()

    store.dispatch('context/setLoading')

    try {
      await Promise.all(hooks.map(hook => hook(store, to, from)))
      store.dispatch('context/reset')
      next()
    } catch (err) {
      next(err)
    }
  })

  app.$mount('#app')
})

// service worker
if (process.env.NODE_ENV === 'production' && navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js')
}
