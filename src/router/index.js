import Vue from 'vue';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // 这个样式必须引入
import Router from 'vue-router';
import Overview from './overview';
import ReportForm from './reportForm';
import Calendar from './calendar';
// import Error from './error';
import { getRoutes } from './../utils/router'

// 简单配置
NProgress.inc(0.2);
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });

const Login = r => require.ensure([], () => r(require('@/views/login/index.vue')), 'user');
const Layout = r => require.ensure([], () => r(require('@/views/layout/index.vue')), 'layout');
const Home = r => require.ensure([], () => r(require('@/views/home/index.vue')), 'home');

const routerModule = getRoutes(require.context('./', false, /\.js$/), './index.js');
console.log(...routerModule);
console.log(Overview);

Vue.use(Router);

const router = new Router({
  linkActiveClass: 'selColor',
  linkExactActiveClass: 'selColor',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      component: Layout,
      // redirect: '/overview/list',
      children: [
        {
          path: '',
          component: Home,
        },
        ...routerModule,
      ],
    },
  ],
});

router.beforeEach((to,from,next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
