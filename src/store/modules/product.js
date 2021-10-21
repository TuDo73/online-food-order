const state = {
  // data
  products: [],
};
const getters = {
  // computed
};

const actions = {
  // methods
};

const mutations = {
  setProducts(state, value) {
    state.products = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
