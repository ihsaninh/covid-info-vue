/* eslint-disable no-unused-vars */
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home';
import News from './views/News';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '',
      component: Home,
      meta: {
        title: 'COVID-19 Info',
      },
    },
    {
      path: '/news',
      component: News,
      meta: {
        title: 'COVID-19 News',
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title;
  });
});
