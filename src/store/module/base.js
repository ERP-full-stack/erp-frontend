const base = {
  state: {
    title: '',
  },
  mutations: {
    SET_TITLE: (state, title) => {
      state.title = title;
    },
  },
  actions: {
    setTitle({ commit }) {
      commit('SET_TITLE');
    },
  },
};

export default base;
