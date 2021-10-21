<template>
  <div class="cart-warpper">
    <div
      class="cart-device"
      v-if="!isShowCart"
      @click="showHideCartDevice(true)"
    >
      <div class="cart-device-box">
        <div class="cart-icon-wrap">
          <div class="cart-icon">
            <span class="icon-cart"></span>
            <span class="cart-numb">1</span>
          </div>
        </div>
        <div class="cart-device-text">
          <span class="text-title">Cart </span>
          <span class="cart-total">(10.00 €)</span>
        </div>
      </div>
    </div>
    <div
      class="shopping-cart-bar"
      :style="{ height: heightCart }"
      :class="{ show: isShowCart }"
    >
      <div class="shopping-cart-data">
        <h4>
          Shopping Cart
          <span class="icon-close" @click="showHideCartDevice(false)"></span>
        </h4>
        <!-- <div class="no-data">
        <p>No items in cart</p>
      </div> -->
        <div class="has-data" :class="{ 'in-checkout': isInCheckout }">
          <ul class="summary-list">
            <li
              class="summary-list-item"
              v-for="(item, index) in cartList"
              :key="index"
            >
              <div class="item-wrap">
                <div class="item-img">
                  <img src="../assets/images/shop-2_large.jpg" alt="product" />
                </div>
                <div class="item-details">
                  <div class="row-detail item-name">{{ item.name }}</div>
                  <div class="row-detail item-quantity" v-if="isInCheckout">
                    {{ item.quantity }}
                  </div>
                  <div class="row-detail item-method" v-if="!isInCheckout">
                    <div class="quantity-number">
                      <div
                        class="quantity-btn dec-btn"
                        @click="
                          handleProductQuantityButton(item.id, 'decrease')
                        "
                      >
                        <span>-</span>
                        <div class="overlay-btn"></div>
                      </div>
                      <div class="quantity-input">
                        {{ item.quantity }}
                      </div>
                      <div
                        class="quantity-btn inc-btn"
                        @click="
                          handleProductQuantityButton(item.id, 'increase')
                        "
                      >
                        <span>+</span>
                        <div class="overlay-btn"></div>
                      </div>
                    </div>
                    <div class="note-btn" @click="showHideProductNote(item.id)">
                      <span class="icon-pencil"></span>
                    </div>
                    <div class="delete-item">
                      <span class="icon-bin"></span>
                    </div>
                  </div>
                  <div class="row-detail item-total-price">
                    <span>{{ item.price }} €</span>
                  </div>
                  <div class="note-text">
                    {{ item.note }}
                  </div>
                  <div class="note-detail" v-if="selectedNoteItem == item.id">
                    <fieldset>
                      <legend>Add note</legend>
                      <textarea
                        cols="0"
                        rows="3"
                        maxlength="160"
                        class="note-textarea"
                        placeholder='E.g. "Without onions"'
                        v-model="productNote"
                        v-focus
                      ></textarea>
                    </fieldset>
                    <div class="note-detail-button">
                      <span
                        class="button-item cancel-btn"
                        @click="showHideProductNote(null)"
                      >
                        Cancel
                      </span>
                      <!-- <span class="button-item delete-btn">Delete</span> -->
                      <span
                        class="button-item save-btn"
                        @click="handleProductNote"
                      >
                        Save
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div class="total">
            <div class="total-col">
              <span>Sub-total</span>
              <span>18.35 €</span>
            </div>
            <div class="total-col">
              <span>Delivery costs</span>
              <span>4.35 €</span>
            </div>
            <div class="total-col total-price">
              <span>Total</span>
              <span>30.00 €</span>
            </div>
          </div>
          <div class="cart-rule" v-if="$route.path == '/'">
            You have reached the minimum order amount of 30.00 € to checkout.
          </div>
        </div>
        <div class="shopping-cart-action" v-if="!isInCheckout">
          <div class="action-btn btn-checkout" @click="goToCheckout">
            Checkout
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { globalFunction } from "@/global/global.js";
import { mapState } from "vuex";
// import eventBus from "@/eventBus/eventBus.js";

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
      isShowCart: false,

      productQuantity: 1,

      selectedNoteItem: null,
      productNote: "",

      cartList: [
        {
          id: 1,
          name: "Chicken Soup 1",
          price: 4.35,
          quantity: 1,
          note: "",
        },
        {
          id: 2,
          name: "Chicken Soup 2",
          price: 4.35,
          quantity: 1,
          note: "",
        },
        {
          id: 3,
          name: "Chicken Soup 3",
          price: 4.35,
          quantity: 1,
          note: "",
        },
        {
          id: 4,
          name: "Chicken Soup 4",
          price: 4.35,
          quantity: 1,
          note: "",
        },
        {
          id: 5,
          name: "Chicken Soup 5",
          price: 4.35,
          quantity: 1,
          note: "",
        },
        {
          id: 6,
          name: "Chicken Soup 6",
          price: 4.35,
          quantity: 1,
          note: "",
        },
      ],
    };
  },

  computed: {
    ...mapState({
      isInCheckout: (state) => state.helper.isInCheckout,
      heightCart: (state) => state.cart.heightCart,
    }),
  },

  components: {},

  methods: {
    showHideCartDevice(value) {
      this.isShowCart = value;
      globalFunction.handleBodyScroll(value);
    },

    goToCheckout() {
      globalFunction.handleBodyScroll(false);
      this.$router.push({ path: "/checkout" });
    },

    calculateCartHeight() {
      this.$store.dispatch("cart/calculateCartHeight");
    },

    handleProductQuantityButton(id, value) {
      switch (value) {
        case "increase":
          console.log(id);
          // this.productQuantity += 1;
          break;
        case "decrease":
          console.log(id);
          // this.productQuantity -= 1;
          // if (this.productQuantity <= 0) {
          //   this.productQuantity = 1;
          // }
          break;
        default:
          break;
      }
    },

    showHideProductNote(value) {
      this.selectedNoteItem = value;
    },

    handleProductNote() {
      console.log(this.productNote);
    },
  },

  created() {},
  mounted() {
    window.addEventListener("scroll", this.calculateCartHeight);
  },

  destroyed() {
    window.removeEventListener("scroll", this.calculateCartHeight);
  },
};
</script>
