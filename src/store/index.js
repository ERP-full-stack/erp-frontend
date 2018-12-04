import Vue from 'vue';
import Vuex from 'vuex';
import user from './module/user';
import queryTable from './module/queryTable';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    queryTable,
  },
});

export default store;
