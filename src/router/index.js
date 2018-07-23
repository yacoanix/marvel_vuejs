import Vue from 'vue'
import Router from 'vue-router'
import principal from '@/components/principal'
import comic from '@/components/comic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'principal',
      component: principal
    },
    {
      path: '/comic/:comicId',
      name: 'comic',
      component: comic
    }
  ]
})
