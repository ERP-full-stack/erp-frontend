export default function createStoreMoudle() {
  return {
    namespaced: true,
    state: {
      // page: 1,
      // pageSize: 10,
      // pageSizes: [100, 200, 300, 400],
      res: {},
    },
    mutations: {
      SET_QUERY_TABLE(state, payload) {
        state.res = payload.data;
      },
    },
  };
}
