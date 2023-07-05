import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import EventDetailView from '../views/details/EventDetailView.vue'
import EventLayoutView from '../views/details/EventLayoutView.vue'
import EventAirlineView from '../views/details/EventAirlineView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import EventEditView from '../views/details/EventEditView.vue'
import NProgress from 'nprogress'
import EventService from '@/services/EventService'
import { usePassengerStore, useAirlineStore } from '@/stores/passenger'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: (route) => ({
        page: parseInt((route.query?.page as string) || '1')
      })
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/passenger/:id',
      name: 'event-layout',
      component: EventLayoutView,
      props: true,
      beforeEnter: (to) => {
        const id: number = parseInt(to.params.id as string)
        const passengerStore = usePassengerStore()
        const airlineStore = useAirlineStore()
        EventService.getEventById(id)
          .then((response) => {
            passengerStore.setPassenger(response.data)
            EventService.getAirlineById(Number(response.data.airlineId))
              .then((response) => {
                airlineStore.setAirline(response.data)
              })
              .catch((error) => {
                console.log(error)
                if (error.response && error.response.status === 404) {
                  return { name: '404-resource', params: { resource: 'AirlineId' } }
                }
              })
          })
          .catch((error) => {
            console.log(error)
            if (error.response && error.response.status === 404) {
              return { name: '404-resource', params: { resource: 'PassengerId' } }
            }
          })
      },
      children: [
        {
          path: '',
          name: 'event-detail',
          component: EventDetailView,
          props: true
        },
        {
          path: 'airline',
          name: 'event-airline',
          component: EventAirlineView,
          props: true
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEditView,
          props: true
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },
    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFoundView,
      props: true
    }
  ]
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
