import loginUserInfo from './../../data/loginUserInfo';

const login = {
  state: {
    username: window.sessionStorage.getItem('username'),
    role: window.sessionStorage.getItem('role'),
    describe: window.sessionStorage.getItem('describe'),
    newRouter: [],
  },
  mutations: {
    SET_USERNAME: (state, username) => {
      state.username = username;
    },
    SET_ROLE: (state, role) => {
      state.role = role;
    },
    SET_DESCRIBE: (state, describe) => {
      state.describe = describe;
    },
    SET_NEWROUTER: (state, newRouter) => {
      state.newRouter = newRouter;
    },
  },
  actions: {
    login({ commit }, info) {
      return new Promise((resolve, reject) => {
        let status = 0;
        loginUserInfo.forEach((value) => {
          if (value.username === info.username) {
            window.sessionStorage.setItem('username', value.username);
            window.sessionStorage.setItem('role', value.role);
            window.sessionStorage.setItem('describe', value.describe);
            commit('SET_USERNAME', value.username);
            commit('SET_ROLE', value.role);
            commit('SET_DESCRIBE', value.describe);
            status += 1;
          }
        });
        if (status > 0) {
          resolve(info);
        } else {
          reject(info);
        }
      });
    },
    roles({ commit }, newRouter) {
      return new Promise((resolve) => {
        commit('SET_NEWROUTER', newRouter);
        resolve(newRouter);
      });
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        window.sessionStorage.removeItem('username');
        window.sessionStorage.removeItem('role');
        window.sessionStorage.removeItem('describe');
        commit('SET_USERNAME', '');
        commit('SET_ROLE', '');
        commit('SET_DESCRIBE', '');
        commit('SET_NEWROUTER', []);
        resolve();
      });
    },
  },
};

export default login;
