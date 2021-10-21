import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      redirect: "/",
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: () => import("@/views/Checkout.vue"),
    },
    {
      path: "/",
      name: "Order",
      component: () => import("@/views/Order.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
