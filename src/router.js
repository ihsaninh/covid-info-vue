import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home';
import About from './views/About';
import News from './views/News';

Vue.use(VueRouter)

export const router  = new VueRouter({
  mode: 'history',
  routes: [
    { path: '', component: Home },
    { path: '/news', component: News },
    { path: '/about', component: About },
  ]
})