<template>
  <div
    class="body-wrapper"
    :class="{
      'small-screen': isOnSmallScreen,
      'disable-scroll': isOpenInfoPopup,
    }"
  >
    <div
      class="overlay-body"
      :class="{
        'active-quick-view': isOpenQuickView,
        'active-info-popup': isOpenInfoPopup,
      }"
      @click="closeAllPopup"
    ></div>
    <Header />
    <main>
      <Cart />
      <Banner />
      <section class="main-order">
        <CategoryBar />
        <OrderList />
      </section>
    </main>
    <Footer />
  </div>
</template>
<script>
import axios from "axios";
import { globalFunction } from "@/global/global.js";
import eventBus from "@/eventBus/eventBus.js";
import { mapState } from "vuex";
import categoryService from "@/services/categoryService";
import productService from "@/services/productService";
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Cart from "@/components/Cart.vue";
import CategoryBar from "@/components/CategoryBar.vue";
import OrderList from "@/components/OrderList.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {};
  },

  computed: {
    ...mapState({
      restaurantCode: (state) => state.restaurant.restaurantCode,
      isOpenQuickView: (state) => state.helper.isOpenQuickView,
      isOnSmallScreen: (state) => state.helper.isOnSmallScreen,
      isOpenInfoPopup: (state) => state.helper.isOpenInfoPopup,
    }),
  },

  components: {
    Header,
    Banner,
    Cart,
    CategoryBar,
    OrderList,
    Footer,
  },

  methods: {
    getCategories() {
      return categoryService.getAll(this.restaurantCode);
    },

    getProducts() {
      return productService.getAll(this.restaurantCode);
    },

    getData() {
      this.$store.commit("helper/setLoadingState", true);
      axios
        .all([this.getCategories(), this.getProducts()])
        .then(
          axios.spread((categories, products) => {
            let cats = categories.data;
            let prods = products.data;

            cats.map((category) => {
              const product = prods.filter(
                (product) => product.category_code === category.code
              );

              if (product) {
                category.products = product;
              }
              return category;
            });

            this.$store.commit("category/setCategories", cats);
            this.$store.commit("product/setProducts", prods);
            eventBus.$emit("handleCategorySlider", "");

            this.$store.commit("helper/setLoadingState", false);
          })
        )
        .catch((error) => {});
    },

    closeAllPopup() {
      this.$store.commit("helper/setQuickViewState", false);
      this.$store.commit("helper/setInfoPopupState", false);

      // enable html scroll
      globalFunction.handleHtmlScroll(false);
    },
  },

  created() {
    this.getData();
    this.$store.commit("helper/setInCheckoutState", false);
  },
};
</script>
