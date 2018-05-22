import Vue from 'vue'
import Router from 'vue-router'
import DashboardPage from '@/pages/DashboardPage'
import NewObjectPage from '@/pages/NewObjectPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DashboardPage',
      component: DashboardPage
    },
    {
      path: '/new',
      name: 'NewObjectPage',
      component: NewObjectPage
    }
  ]
})
