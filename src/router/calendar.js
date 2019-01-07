/*
 * @class     日历
 * @author    kaway Liu
 * @date      18-11-16
 */
const Calendar = r => require.ensure([], () => r(require('@/views/calendar/index')), 'calendar');

export default [
  {
    path: 'calendar',
    component: Calendar,
    meta: {
      tag: '/calendar',
      title: '日历',
    }
  },
];
