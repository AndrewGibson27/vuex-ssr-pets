import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  const router = new Router({
    mode: 'history',
    routes: []
  })

  return router
}
