import Vue from 'vue'
import Router from 'vue-router'
import TriviaQuestion from '@/components/TriviaQuestion'
import NewQuestion from '@/components/NewQuestion'
import TV from '@/components/TV'
import nav from '@/components/nav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TriviaQuestion',
      component: TriviaQuestion
    },
    {
      path: '/NewQuestion',
      name: 'NewQuestion',
      component: NewQuestion
    },
    {
      path: '/TV',
      name: 'TV',
      component: TV
    },
    {
      path: '/question',
      name: 'TriviaQuestion',
      component: TriviaQuestion
    },
  ] 
})
