const Error404 = r => require.ensure([], () => r(require('@/views/error/404/index.vue')), 'Error404');
const Error403 = r => require.ensure([], () => r(require('@/views/error/403/index.vue')), 'Error403');
const Error500 = r => require.ensure([], () => r(require('@/views/error/500/index.vue')), 'Error500');

export default [
  {
    path: '/error403',
    name: 'error403',
    component: Error403,
  },
  {
    path: '/error404',
    name: 'error404',
    component: Error404,
  },
  {
    path: '/error500',
    name: 'error500',
    component: Error500,
  },
  {
    path: "*",
    redirect: "/Error404"
  },
];
