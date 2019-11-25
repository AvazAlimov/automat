import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior: (to) => {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
    return {};
  },
});

export default router;
