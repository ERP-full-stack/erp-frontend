import Vue from 'vue';
import Router from 'vue-router';

const Login = r => require.ensure([], () => r(require('@/views/login/index.vue')), 'login');
// const Layout = r => require.ensure([], () => r(require('@/views/layout/index.vue')), 'layout');
// const Overview = r => require.ensure([], () => r(require('@/views/overview/index.vue')), 'overview');
// const Flow = r => require.ensure([], () => r(require('@/views/flow/index.vue')), 'flow');
// const Sale = r => require.ensure([], () => r(require('@/views/sale/index.vue')), 'sale');

Vue.use(Router);

export default new Router({
  linkActiveClass: 'selColor',
  linkExactActiveClass: 'selColor',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
