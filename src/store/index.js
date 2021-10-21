import Vue from "vue";
import Vuex from "vuex";

import category from "./modules/category";
import product from "./modules/product";
import cart from "./modules/cart";
import service from "./modules/service";
import i18n from "./modules/i18n";
import helper from "./modules/helper";
import restaurant from "./modules/restaurant";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    category,
    product,
    cart,
    service,
    i18n,
    helper,
    restaurant,
  },
});
