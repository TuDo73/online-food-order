<template>
  <div class="category-bar">
    <div class="category-bar-wrap" :class="{ 'is-sticky': isSticky }">
      <div class="container">
        <div class="wrapper">
          <div class="search-box" :class="{ open: isOpenSearch }">
            <div class="search-form">
              <span class="icon-search" @click="showHideSearch(true)"></span>
              <input
                type="text"
                class="search-form-field"
                placeholder="Search"
                v-if="isOpenSearch"
                v-focus
              />
              <span
                class="close-search-icon icon-cross"
                @click="showHideSearch(false)"
              ></span>
            </div>
          </div>
          <div class="category-nav">
            <div class="slider-wrapper">
              <swiper class="swiper" :options="swiperOption">
                <swiper-slide
                  class="cat-item"
                  :class="{ selected: category.isSelected }"
                  v-for="(category, index) in categories"
                  :key="index"
                  :data-cat-anchor-id="category.code"
                >
                  <span @click="handleClickCategory($event)">
                    {{ category.name }}
                  </span>
                </swiper-slide>
              </swiper>
              <div class="slider-nav">
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import eventBus from "@/eventBus/eventBus.js";
import { mapState } from "vuex";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },

  data() {
    return {
      isOpenSearch: false,

      // swiper slider
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        allowTouchMove: false,
        slidesPerView: "auto",
        preventClicksPropagation: false,
        freeMode: true,
      },
    };
  },

  computed: {
    ...mapState({
      restaurantCode: (state) => state.restaurant.restaurantCode,
      categories: (state) => state.category.categories,
      isSticky: (state) => state.category.isSticky,
    }),
  },

  components: {
    Swiper,
    SwiperSlide,
  },

  methods: {
    handleCategorySlider() {
      this.$store.commit("category/addCategorySelectedProp");
      this.$store.commit("category/setStickyCategoryState", false);
      window.addEventListener("scroll", this.handleScrollCategoryBar);
    },

    showHideSearch(value) {
      this.isOpenSearch = value;
    },

    handleScrollCategoryBar() {
      this.$store.dispatch("category/handleScrollCategoryBar");
    },

    handleClickCategory(el) {
      this.$store.dispatch("category/handleClickCategory", el);
    },
  },

  created() {
    eventBus.$on("handleCategorySlider", () => {
      console.log("Emit Slider");
      this.handleCategorySlider();
    });
  },

  destroyed() {
    eventBus.$off("handleCategorySlider");
    window.removeEventListener("scroll", this.handleScrollCategoryBar);
  },
};
</script>
