import Vue from 'vue'
import Router from 'vue-router'
import principal from '@/components/principal'
import Router3 from '@/components/Router3'
import Router4 from '@/components/Router4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'principal',
      component: principal
    },
    {
      path: '/Router3',
      name: 'Router3',
      component: Router3
    },
    {
      path: '/Router4',
      name: 'Router4',
      component: Router4
    }
  ]
})
