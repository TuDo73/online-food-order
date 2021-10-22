<template>
  <section class="banner">
    <div class="banner-content">
      <h1 class="heading">
        <span class="heading-text" @click="showHideInfoPopup(true)">
          VIET PHO
          <span class="heading-icon icon-info"></span>
        </span>
      </h1>
      <p class="sub-heading">
        Dong Xuan Center – Hall 2 Herzbergstraße 128 – 139
      </p>
    </div>
    <div class="info-popup" :class="{ open: isOpenInfoPopup }">
      <div class="info-popup-content">
        <h3 class="popup-heading">
          About Us
          <div class="close-popup" @click="showHideInfoPopup(false)">
            <span class="icon-close"></span>
          </div>
        </h3>
        <div class="popup-content-wrap">
          <div class="info-row">
            <h4 class="row-heading">
              <span class="row-heading-icon icon-clock"></span>
              Delivery times
            </h4>
            <div class="row-content">
              <div class="content-col col-left">
                <ul>
                  <li>Monday</li>
                  <li>Tuesday</li>
                  <li>Wednesday</li>
                  <li>Thursday</li>
                  <li>Friday</li>
                  <li>Saturday</li>
                  <li>Sunday</li>
                </ul>
              </div>
              <div class="content-col col-right">
                <ul>
                  <li>Closed for delivery</li>
                  <li>12:00 - 21:30</li>
                  <li>12:00 - 21:30</li>
                  <li>12:00 - 21:30</li>
                  <li>12:00 - 21:30</li>
                  <li>14:00 - 21:30</li>
                  <li>14:00 - 21:30</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="info-row">
            <h4 class="row-heading">
              <span class="row-heading-icon icon-delivery_dining"></span>
              Delivery costs
            </h4>
            <div class="row-content">
              <div class="content-col col-left">
                <ul>
                  <li>Minimum order amount</li>
                  <li>Delivery costs</li>
                </ul>
              </div>
              <div class="content-col col-right">
                <ul>
                  <li>30.00 €</li>
                  <li>2.00 €</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="info-row">
            <h4 class="row-heading">
              <span class="row-heading-icon icon-store-front"></span>
              Website
            </h4>
            <div class="row-content">
              <a href="#">vietpho.de</a>
            </div>
          </div>
          <div class="info-row">
            <h4 class="row-heading">
              <span class="row-heading-icon icon-credit-card-alt"></span>
              Payment methods
            </h4>
            <div class="row-content">
              <div class="card-item">
                <img src="../assets/images/payment_18.png" alt="card" />
              </div>
              <div class="card-item">
                <img src="../assets/images/payment_61.png" alt="card" />
              </div>
            </div>
          </div>
          <div class="info-row">
            <h4 class="row-heading">
              <span class="row-heading-icon icon-building"></span>
              Colophon
            </h4>
            <div class="row-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },

  computed: {
    ...mapState({
      isOpenInfoPopup: (state) => state.helper.isOpenInfoPopup,
    }),
  },

  components: {},

  methods: {
    showHideInfoPopup(value) {
      this.$store.commit("helper/setInfoPopupState", value);
    },
  },

  created() {},
};
</script>
