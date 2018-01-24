import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TriviaQuestion from '@/components/TriviaQuestion'
import NewQuestion from '@/components/NewQuestion'
import TV from '@/components/TV'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/question',
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
    }
  ]
})
