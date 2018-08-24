import { createApp } from './app'

const { app, router, store } = createApp()

// Replace client side store state with server state
if (window.__INITIAL_STATE__) store.replaceState(window.__INITIAL_STATE__)

router.onReady(() => {
  router.beforeResolve(async (to, from, next) => {
    const matched = router.getMatchedComponents(from)
    const hooks = matched.map(c => c.fetch).filter(fetch => !!fetch)

    if (hooks.length) {
      store.dispatch('context/setLoading', true)

      try {
        await Promise.all(hooks.map(hook => hook && hook(store, to, from)))
        next()
      } catch (err) {
        next(err)
      } finally {
        store.dispatch('context/setLoading', false)
      }
    } else {
      store.dispatch('context/setLoading', false)
      next()
    }
  })

  router.onError(() => {
    const message = 'Something went terribly wrong'
    store.dispatch('context/setError', { message, status: 500 })
  })

  app.$mount('#app')
})

// service worker
if (process.env.NODE_ENV === 'production' && navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js')
}
