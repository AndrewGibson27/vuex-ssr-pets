import Vue from 'vue'
import Router from 'vue-router'

import LocationList from './LocationList'
import LocationDetail from './LocationDetail'
import PetsHome from './PetsHome'
import PetDetail from './PetDetail'

Vue.use(Router)

export function createRouter () {
  const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        redirect: { name: 'location-list' }
      },
      {
        path: '/pets',
        name: 'home',
        component: PetsHome,
        children: [
          {
            path: 'locations',
            name: 'location-list',
            component: LocationList,
            children: [
              {
                path: ':id',
                name: 'location-detail',
                component: LocationDetail
              }
            ]
          },
          {
            path: 'detail/:id',
            name: 'pet-detail',
            component: PetDetail
          }
        ]
      }
    ]
  })

  return router
}
