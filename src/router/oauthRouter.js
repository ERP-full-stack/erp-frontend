const Layout = r => require.ensure([], () => r(require('@/views/layout/index.vue')), 'layout');
const Overview = r => require.ensure([], () => r(require('@/views/overview/index.vue')), 'overview');
const Flow = r => require.ensure([], () => r(require('@/views/flow/index.vue')), 'flow');
const Sale = r => require.ensure([], () => r(require('@/views/sale/index.vue')), 'sale');

export default [
  {
    path: '/',
    component: Layout,
    redirect: '/overview',
    children: [
      {
        path: '/overview',
        name: 'overview',
        label: '概览',
        icon: 'el-icon-menu',
        component: Overview,
        meta: {
          role: ['admin', 'overview', 'flow', 'sale'],
        },
      },
      {
        path: '/flow',
        name: 'flow',
        label: '流量',
        icon: 'el-icon-document',
        component: Flow,
        meta: {
          role: ['admin', 'flow'],
        },
      },
      {
        path: '/sale',
        name: 'sale',
        label: '销售',
        icon: 'el-icon-setting',
        component: Sale,
        meta: {
          role: ['admin', 'sale'],
        },
      },
    ],
  },
];
