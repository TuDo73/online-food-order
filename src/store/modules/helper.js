// import { globalFunction } from "@/global/global.js";

const state = {
  // data
  isOpenQuickView: false,
  isOnSmallScreen: false,
  isOpenInfoPopup: false,
  isOpenDeliveryPopup: false,
  isOpenPaymentPopup: false,
  isShowLoading: false,
  isInCheckout: false,
};
const getters = {
  // computed
};

const actions = {
  // methods
};

const mutations = {
  setQuickViewState(state, value) {
    state.isOpenQuickView = value;
  },
  setDetectScreenSize(state, value) {
    state.isOnSmallScreen = value;
  },
  setInfoPopupState(state, value) {
    state.isOpenInfoPopup = value;
  },
  setDeliveryPopupState(state, value) {
    state.isOpenDeliveryPopup = value;
  },
  setPaymentPopupState(state, value) {
    state.isOpenPaymentPopup = value;
  },
  setLoadingState(state, value) {
    state.isShowLoading = value;
  },
  setInCheckoutState(state, value) {
    state.isInCheckout = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
