import Vue from 'vue'
import Router from 'vue-router'
import principal from '@/components/principal'
import comic from '@/components/comic'
import { routerHistory, writeHistory } from 'vue-router-back-button'

Vue.use(Router)
Vue.use(routerHistory)

const router= new Router({
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
router.afterEach(writeHistory)
export default router;

