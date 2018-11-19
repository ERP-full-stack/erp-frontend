import Vue from 'vue';
import http from './../utils/http';

// 全局组件

import SearchPager from './search-pager';
import QueyForm from './query-form';
import TableList from './table-list';

const components = [
  SearchPager,
  QueyForm,
  TableList,
];

const setPrototype = () => {
  Vue.prototype.$http = http;
};

const install = () => {
  components.forEach((component) => {
    console.log(component)
    Vue.component(component.name, component);
  });
  setPrototype(Vue);
};

export default install;
