/*
 * @class     概览
 * @author    kaway Liu
 * @date      18-11-16
 */
const List = r => require.ensure([], () => r(require('@/views/overview/index')), 'List');
const Detail = r => require.ensure([], () => r(require('@/views/overview/detail')), 'detail');
const Add = r => require.ensure([], () => r(require('@/views/overview/add')), 'add');
const Update = r => require.ensure([], () => r(require('@/views/overview/update')), 'update');

export default [
  {
    path: 'overview/list',
    component: List,
    meta: {
      tag: '/overview/list',
      title: '概览',
    }
  },
  {
    path: 'overview/detail/:id',
    component: Detail,
    meta: {
      tag: '/overview/list',
      title: '概览-详情',
    }
  },
  {
    path: 'overview/add',
    component: Add,
    meta: {
      tag: '/overview/list',
      title: '概览-新增',
    }
  },
  {
    path: 'overview/update/:id',
    component: Update,
    meta: {
      tag: '/overview/list',
      title: '概览-修改',
    }
  },
];
