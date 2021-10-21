import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import smoothscroll from "smoothscroll-polyfill";

// smooth scrolling support for Safari, IE, and Edge.
smoothscroll.polyfill();
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
