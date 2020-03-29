import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home';
import About from './views/About';
import News from './views/News';

Vue.use(VueRouter)

export const router  = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { 
      path: '',
      component: Home, 
      meta: {
        title: 'Covid 19 Info',
      }
    },
    { 
      path: '/news', 
      component: News,
      meta: {
        title: 'Covid-19 News',
      } 
    },
    { 
      path: '/about', 
      component: About,
      meta: {
        title: 'About Covid-19'
      } 
    },
  ]
})

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  Vue.nextTick(() => {
      document.title = to.meta.title;
  });
});