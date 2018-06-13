import Vue from 'vue'
import Router from 'vue-router'
import DashboardPage from '@/pages/DashboardPage'
import NewObjectPage from '@/pages/NewObjectPage'
import ObjectPage from '@/pages/ObjectPage'
import MainLayout from '@/layouts/MainLayout'
import LoginPage from '@/pages/LoginPage'
import AuthService from '@/service/auth-service'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '/',
          name: 'DashboardPage',
          component: DashboardPage
        },
        {
          path: '/dashboard',
          name: 'Dashboard',
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
      ],
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !AuthService.isAuthenticated()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

export default router
