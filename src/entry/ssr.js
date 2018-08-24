import { createApp } from './app'

export default async function serverEntry (context) {
  const { app, store, router } = createApp()
  router.push(context.url)

  try {
    await new Promise((resolve, reject) => {
      router.onReady(() => {
        const components = router.getMatchedComponents()
        fetchData(components, store, router.currentRoute)
          .then(resolve)
          .catch(reject)
      })
    })
  } catch (error) {
    const message = 'Critical Error'
    await store.dispatch('context/setError', { message, status: 500 })
  }

  context.state = store.state
  return app
}

function fetchData (components, store, currentRoute) {
  return Promise.all([
    ...components
      .filter(({ fetch }) => !!fetch)
      .map(({ fetch }) => fetch(store, currentRoute, null))
  ])
}
