import { createRouter, createWebHistory } from 'vue-router'
import PassengerListView from '@/views/PassengerListView.vue'
import AboutView from '@/views/AboutView.vue'
import PassengerEditView from '@/views/event/EditView.vue'
import PassengerLayoutView from '@/views/event/LayoutView.vue'
import PassengerDetailView from '@/views/event/DetailView.vue'
import PassengerRegisterView from '@/views/event/RegisterView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import AirlineDetailView from '@/views/event/AirlineDetailView.vue'
import nProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PassengerListView,
      props: (route) => ({
        page: parseInt(route.query.page?.toString() || '1'),
        pageSize: parseInt(route.query.pageSize?.toString() || '10')
      })
    },
    {
      path: '/passenger/:id',
      name: 'passenger-layout-view',
      component: PassengerLayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'passenger-detail-view',
          component: PassengerDetailView,
          props: true
        },
        {
          path: '',
          name: 'passenger-register-view',
          component: PassengerRegisterView,
          props: true
        },
        {
          path: '',
          name: 'passenger-edit-view',
          component: PassengerEditView,
          props: true
        },
        {
          path: 'airline',
          name: 'airline-detail-view',
          component: AirlineDetailView,
          props: true
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/404/:resource',
      name: '404-resource-view',
      component: NotFoundView,
      props: true
    },

    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach(() => {
  nProgress.start()
})

router.afterEach(() => {
  nProgress.done()
})

export default router