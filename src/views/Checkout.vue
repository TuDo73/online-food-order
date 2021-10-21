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
        'active-info-popup': isOpenInfoPopup,
        'active-delivery-popup': isOpenDeliveryPopup,
        'active-payment-popup': isOpenPaymentPopup,
      }"
      @click="closeAllPopup"
    ></div>
    <Header />
    <main>
      <Cart />
      <Banner />
      <section class="main-checkout">
        <div class="container">
          <h2>
            <span class="checkout-heading">Checkout</span>
            <div class="back">
              <div class="back-btn" @click="backToOrder">
                <span class="back-icon icon-navigate_before"></span>
                <span>Back</span>
              </div>
            </div>
          </h2>
          <div class="shipping-methods">
            <div class="shipping-select-wrap">
              <h4>Shipping methods</h4>
              <select
                class="shipping-select"
                v-model="shipMethod"
                @change="handleChangeSelect"
              >
                <option value="delivery">Delivery</option>
                <option value="pickup">Pickup</option>
              </select>
            </div>
          </div>
          <div class="shipping-info-form">
            <div class="delivery-address" v-if="shipMethod === 'delivery'">
              <h4>Delivery Address</h4>
              <div class="form-list">
                <div class="form-item">
                  <div class="form-heading">Street name</div>
                  <div class="wrap-input">
                    <input
                      class="form-input"
                      type="text"
                      placeholder="Type street name"
                    />
                  </div>
                </div>
                <div class="form-item">
                  <div class="form-heading">House number</div>
                  <div class="wrap-input">
                    <input
                      class="form-input"
                      type="text"
                      placeholder="Type house number"
                    />
                  </div>
                </div>
                <div class="form-item">
                  <div class="form-heading">Postcode</div>
                  <div class="wrap-input">
                    <input
                      class="form-input"
                      type="text"
                      placeholder="Type your postal code"
                    />
                  </div>
                </div>
                <div class="form-item">
                  <div class="form-heading">City</div>
                  <div class="wrap-input">
                    <input
                      class="form-input"
                      type="text"
                      placeholder="Type your city"
                    />
                  </div>
                </div>
                <div class="form-item">
                  <div class="form-heading">Entrance (optional)</div>
                  <div class="wrap-input">
                    <input
                      class="form-input"
                      type="text"
                      placeholder="Type entrance"
                    />
                  </div>
                </div>
                <div class="form-item">
                  <div class="form-heading">Floor (optional)</div>
                  <div class="wrap-input">
                    <input
                      class="form-input"
                      type="text"
                      placeholder="Type floor number"
                    />
                  </div>
                </div>
                <div class="form-item">
                  <div class="form-heading">Door (optional)</div>
                  <div class="wrap-input">
                    <input
                      class="form-input"
                      type="text"
                      placeholder="Type door"
                    />
                  </div>
                </div>
                <div class="form-item">
                  <div class="form-heading">Company name (optional)</div>
                  <div class="wrap-input">
                    <input
                      class="form-input"
                      type="text"
                      placeholder="Type company name"
                    />
                  </div>
                </div>
                <div class="form-item">
                  <div class="form-heading">Add note (optional)</div>
                  <div class="wrap-input">
                    <input
                      class="form-input"
                      type="text"
                      placeholder="ie: Please don't ring the bell. Baby is sleeping."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="personal-details">
              <h4>Personal Details</h4>
              <div class="form-list">
                <div class="form-item">
                  <div class="form-heading">First and last name</div>
                  <div class="wrap-input">
                    <input
                      class="form-input"
                      type="text"
                      placeholder="Type your first and last name"
                    />
                  </div>
                </div>
                <div class="form-item">
                  <div class="form-heading">E-mail</div>
                  <div class="wrap-input">
                    <input
                      class="form-input"
                      type="text"
                      placeholder="youremail@email.com"
                    />
                  </div>
                </div>
                <div class="form-item">
                  <div class="form-heading">Phone Number</div>
                  <div class="wrap-input">
                    <input
                      class="form-input"
                      type="text"
                      placeholder="Type your phone number"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="checkout-row delivery-time"
            @click="showHideDeliveryPopup(true)"
          >
            <div class="row-content">
              <span class="col-icon icon-clock"></span>
              <div class="col-content">
                <h5>Delivery time</h5>
                <p>11:00</p>
              </div>
              <div class="row-icon">
                <div class="row-icon-wrap">
                  <span class="icon-checkmark"></span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="checkout-row pay-with"
            @click="showHidePaymentPopup(true)"
          >
            <div class="row-content">
              <img src="../assets/images/ta-cash.svg" alt="icon" />
              <div class="col-content">
                <h5>Pay with</h5>
                <p>Cash</p>
              </div>
              <div class="row-icon">
                <div class="row-icon-wrap">
                  <span class="icon-checkmark"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="order-rule">
            By clicking on ORDER & PAY WITH CASH you agree with the contents of
            the shopping cart, the data you filled out
          </div>
          <div class="order-btn">Order & pay with Cash (30.00 €)</div>
        </div>

        <div
          class="checkout-popup delivery-popup"
          :class="{ open: isOpenDeliveryPopup }"
        >
          <div class="popup-content">
            <h3 class="popup-heading">
              Delivery time
              <div class="close-popup" @click="showHideDeliveryPopup(false)">
                <span class="icon-close"></span>
              </div>
            </h3>
            <div class="popup-content-wrap">
              <div class="select-wrap">
                <select class="delivery-time-select">
                  <option>As soon as possible</option>
                  <option>12:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                </select>
                <span class="icon-chevron-down"></span>
              </div>
              <div class="popup-action">
                <div class="popup-btn">Done</div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="checkout-popup payment-popup"
          :class="{ open: isOpenPaymentPopup }"
        >
          <div class="popup-content">
            <h3 class="popup-heading">
              Payment methods
              <div class="close-popup" @click="showHidePaymentPopup(false)">
                <span class="icon-close"></span>
              </div>
            </h3>
            <div class="popup-content-wrap">
              <div class="payment-methods-box">
                <div class="method-opt">
                  <img src="../assets/images/ta-cash.svg" alt="icon" />
                  <p>Cash</p>
                  <span class="icon-checkmark"></span>
                </div>
                <div class="method-opt">
                  <img src="../assets/images/payment_61.png" alt="icon" />
                  <p>Card</p>
                  <!-- <span class="icon-checkmark"></span> -->
                </div>
              </div>
              <div class="popup-action">
                <div class="popup-btn">Done</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
<script>
import { globalFunction } from "@/global/global.js";
import { mapState } from "vuex";
// import eventBus from "@/eventBus/eventBus.js";
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Cart from "@/components/Cart.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Banner,
    Cart,
    Footer,
  },
  data() {
    return {
      shipMethod: "delivery",
    };
  },

  computed: {
    ...mapState({
      isOnSmallScreen: (state) => state.helper.isOnSmallScreen,
      isOpenInfoPopup: (state) => state.helper.isOpenInfoPopup,
      isOpenDeliveryPopup: (state) => state.helper.isOpenDeliveryPopup,
      isOpenPaymentPopup: (state) => state.helper.isOpenPaymentPopup,
      isInCheckout: (state) => state.helper.isInCheckout,
    }),
  },

  methods: {
    showHideDeliveryPopup(value) {
      this.$store.commit("helper/setDeliveryPopupState", value);
    },
    showHidePaymentPopup(value) {
      this.$store.commit("helper/setPaymentPopupState", value);
    },

    closeAllPopup() {
      this.$store.commit("helper/setInfoPopupState", false);
      this.$store.commit("helper/setDeliveryPopupState", false);
      this.$store.commit("helper/setPaymentPopupState", false);

      // enable html scroll
      globalFunction.handleHtmlScroll(false);
    },

    backToOrder() {
      this.$router.push({ path: "/" });
    },

    handleChangeSelect() {
      setTimeout(() => {
        this.$store.dispatch("cart/calculateCartHeight");
      });
    },
  },

  created() {
    this.$store.commit("helper/setInCheckoutState", true);
  },
};
</script>
