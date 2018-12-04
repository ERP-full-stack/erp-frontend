import http from './../../utils/http';

const user = {
  namespaced: true,
  state: {
    username: window.localStorage.getItem('username'),
    role: window.localStorage.getItem('role'),
  },
  getter: {
    username: state => state.username,
    role: state => state.role,
  },
  mutations: {
    SET_USERNAME: (state, username) => {
      state.username = username;
    },
    SET_ROLE: (state, role) => {
      state.role = role;
    },
  },
  actions: {
    async login({ commit }, info) {
      const data = await http.post('/user/login', info);
      window.localStorage.setItem('username', data.data.username);
      window.localStorage.setItem('role', data.data.role);
      commit('SET_USERNAME', data.data.username);
      commit('SET_ROLE', data.data.role);
      return true;
    },
    logout({ commit }) {
      window.localStorage.removeItem('username');
      window.localStorage.removeItem('role');
      commit('SET_USERNAME', '');
      commit('SET_ROLE', '');
      return true;
    },
  },
};

export default user;
