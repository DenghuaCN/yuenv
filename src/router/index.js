import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      // meta: {keepAlive: true},
      component: (resolve) => {
        require(['../views/index/index'], resolve)
      }
    },
    {
      path: '/account',
      name: 'account',
      // meta: {keepAlive: true},
      component: (resolve) => {
        require(['../views/accout/account.vue'], resolve)
      }
    },
    {
      path: '/list',
      name: 'listr',
      // meta: {keepAlive: true},
      component: (resolve) => {
        require(['../views/list'], resolve)
      }
    },
    {
      path: '/mine',
      name: 'mine',
      // meta: {keepAlive: true},
      component: (resolve) => {
        require(['../views/mine'], resolve)
      }
    },
    {
      path: '/error',
      name: 'error',
      // meta: {keepAlive: true},
      component: (resolve) => {
        require(['../views/error'], resolve)
      }
    },
    {
      path: '/form',
      name: 'form',
      // meta: {keepAlive: true},
      component: (resolve) => {
        require(['../views/form'], resolve)
      }
    }
  ]
})

export default router
