/*
 * @class     概览
 * @author    kaway Liu
 * @date      18-11-16
 */
const List = r => require.ensure([], () => r(require('@/views/report-form/index')), 'List');

export default [
  {
    path: 'report-form/list',
    component: List,
    meta: {
      tag: '/report-form/list',
      title: '报表',
    }
  },
];
