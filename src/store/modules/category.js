// import { globalFunction } from "@/global/global.js";
import Vue from "vue";

const state = {
  // data
  categories: [],
  isSticky: false,
};
const getters = {
  // computed
};

const actions = {
  // methods
  handleScrollCategoryBar({ dispatch }) {
    dispatch("handleStickyCategory");
    dispatch("detectCategory");
  },

  handleStickyCategory({ dispatch }) {
    let category = document.querySelector(".category-bar");
    let offsetTop = category.offsetTop;
    dispatch("triggerSticky", offsetTop);
  },

  triggerSticky({ commit }, point) {
    let scroll = window.scrollY || window.pageYOffset;

    if (scroll > point) {
      commit("setStickyCategoryState", true);
    } else {
      commit("setStickyCategoryState", false);
    }
  },

  detectCategory({ state }) {
    const swiper = document.querySelector(".swiper").swiper;
    let meals = document.querySelectorAll(".meals-group");
    let boundTop = 66;
    let selectedIndex;

    // detect meal element
    for (let item of meals) {
      let mealTop = item.getBoundingClientRect().top;
      let mealAnchorID = item.getAttribute("data-meal-anchor-id");

      if (mealTop < boundTop) {
        for (let category of state.categories) {
          if (category.code == mealAnchorID) {
            category.isSelected = true;
          } else {
            category.isSelected = false;
          }
        }
      }
    }

    // slide to category selected
    selectedIndex = state.categories.findIndex((el) => el.isSelected);
    swiper.slideTo(selectedIndex, 300);
  },

  handleClickCategory({ state }, el) {
    const swiper = document.querySelector(".swiper").swiper;
    let clickedItem = el.target.closest(".cat-item");
    let catAnchorID = clickedItem.getAttribute("data-cat-anchor-id");
    let meals = document.querySelectorAll(".meals-group");
    let boundTop = 65;

    // slide to category selected
    for (let category of state.categories) {
      if (category.code == catAnchorID) {
        category.isSelected = true;
        swiper.slideTo(swiper.clickedIndex, 300);
      } else {
        category.isSelected = false;
      }
    }

    // scroll to element
    for (let i = 0; i < meals.length; i++) {
      let mealAnchorID = meals[i].getAttribute("data-meal-anchor-id");

      if (catAnchorID == mealAnchorID) {
        let mealTop = meals[i].offsetTop;
        window.scroll({
          top: mealTop - boundTop,
        });
      }
    }

    // handle click at last slide
    if (
      swiper.isEnd &&
      swiper.snapIndex != swiper.activeIndex &&
      swiper.clickedSlide.classList.contains("swiper-slide-active")
    ) {
      swiper.slidePrev();
    }
  },
};

const mutations = {
  setCategories(state, value) {
    state.categories = value;
  },

  setStickyCategoryState(state, value) {
    state.isSticky = value;
  },

  addCategorySelectedProp(state) {
    for (let category of state.categories) {
      Vue.set(category, "isSelected", false);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
