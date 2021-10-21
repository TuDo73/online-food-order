<template>
  <section class="order-list-block">
    <div class="container">
      <div class="order-list">
        <div
          class="meals-group"
          v-for="(category, index) in categories"
          :key="index"
          :data-meal-anchor-id="category.code"
        >
          <div class="meals-group-category">
            <div
              class="image-error cat-img-error"
              v-if="!category.img_url || category.img_url === '\r'"
            >
              <span class="icon-image"></span>
              <span> No image </span>
            </div>
            <div
              class="cat-bg"
              :style="{ backgroundImage: `url(${category.img_url})` }"
              v-if="category.img_url && category.img_url !== '\r'"
            ></div>
            <div class="cat-title">
              {{ category.name }}
            </div>
          </div>
          <div class="product-list">
            <div
              class="product-box"
              v-for="(product, index) in category.products"
              :key="index"
            >
              <div class="product-link">
                <div class="product-img">
                  <div
                    class="image-error product-img-error"
                    v-if="!product.img_url"
                  >
                    <span class="icon-image"></span>
                    <span> No image </span>
                  </div>
                  <img
                    :src="product.img_url"
                    alt="product"
                    v-if="product.img_url"
                  />
                </div>
                <div class="product-details">
                  <div class="product-title">
                    <span
                      class="row-title"
                      @click="showHideQuickView(true, product)"
                    >
                      <span> {{ product.name }} </span>
                      <span class="quick-view icon-info"></span>
                    </span>
                  </div>
                  <div class="product-introduction">
                    {{ product.descrition }}
                  </div>
                  <div class="product-price">{{ product.price }} €</div>
                </div>
                <div class="add-to-cart">
                  <span class="icon-cart-plus"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-quick-view" :class="{ open: isOpenQuickView }">
        <div class="close-quick-view" @click="showHideQuickView(false)">
          <span class="icon-cross"></span>
        </div>
        <div class="quick-view-modal">
          <div class="product-img">
            <img src="../assets/images/shop-2_large.jpg" alt="product" />
          </div>
          <div class="product-details">
            <h4 class="product-title">
              {{ productQuickView.name }}
            </h4>
            <div class="product-description">
              {{ productQuickView.description }}
              <!-- <p>
                Nam tempus turpis at metus scelerisque placerat nulla deumantos
                solicitud felis. Pellentesque diam dolor, elementum etos
                lobortis des mollis ut risus. Sedcus faucibus an sullamcorper
                mattis drostique des commodo pharetras loremos.Donec pretium
                egestas sapien et mollis. Lorem ipsum dolor sit amet
                Sonsectetur...
              </p>
              <ul>
                <li>Lorem impsum</li>
                <li>Lorem impsum lorem</li>
                <li>Lorem impsum</li>
                <li>Lorem impsum lorem</li>
              </ul> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// import { globalFunction } from "@/global/global.js";
import { mapState } from "vuex";

export default {
  data() {
    return {
      productQuickView: {},
    };
  },

  computed: {
    ...mapState({
      isOpenQuickView: (state) => state.helper.isOpenQuickView,
      categories: (state) => state.category.categories,
    }),
  },

  components: {},

  methods: {
    showHideQuickView(value, product = {}) {
      this.$store.commit("helper/setQuickViewState", value);
      this.productQuickView = product;
    },
  },

  created() {},
};
</script>
