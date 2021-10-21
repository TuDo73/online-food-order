const state = {
  // data
  restaurantCode: "RES0001",
  restaurantData: undefined,
};
const getters = {
  // computed
};

const actions = {
  // methods
};

const mutations = {
  setRestaurantData(state, value) {
    state.restaurantData = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
