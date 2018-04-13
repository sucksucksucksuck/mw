import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Suck from '@/components/Suck'
import Register from '@/components/Register'
import About from '@/components/About'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/suck',
      name: 'Suck',
      component: Suck
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
        path: '/about',
        name: 'About',
        component: About
      }
  ]
})
