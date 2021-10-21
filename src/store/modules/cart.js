import { globalFunction } from "@/global/global.js";

const state = {
  // data
  heightCart: "",
};
const getters = {
  // computed
};

const actions = {
  // methods
  calculateCartHeight({ state, rootState }) {
    if (!rootState.helper.isOnSmallScreen) {
      let footer = document.querySelector("footer");
      let topFooter = footer.getBoundingClientRect().top;
      let calHeight = window.innerHeight - topFooter;

      if (globalFunction.isInViewport(footer)) {
        state.heightCart = `calc(100vh - ${calHeight}px)`;
      } else {
        state.heightCart = "";
      }
    }
  },
};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
