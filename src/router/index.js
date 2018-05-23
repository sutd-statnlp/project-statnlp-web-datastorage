import Vue from 'vue'
import Router from 'vue-router'
import DashboardPage from '@/pages/DashboardPage'
import NewObjectPage from '@/pages/NewObjectPage'
import ObjectPage from '@/pages/ObjectPage'

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
    },
    {
      path: '/objects/:name',
      name: 'ObjectPage',
      component: ObjectPage
    }
  ]
})
