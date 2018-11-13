import Vue from 'vue';
import Router from 'vue-router';
import { getRouter } from './getRouter';

const Login = r => require.ensure([], () => r(require('@/views/login/index.vue')), 'login');

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
    ...getRouter
  ],
});
