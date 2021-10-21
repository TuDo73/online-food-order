<template>
  <footer ref="footer">
    <div class="container">
      <!-- <div class="footer-top">
        <div class="footer-col">
          <h4>Help</h4>
          <ul class="footer-link-list">
            <li class="link-item"><a href="#">Search</a></li>
            <li class="link-item"><a href="#">Help</a></li>
            <li class="link-item"><a href="#">Information</a></li>
            <li class="link-item"><a href="#">Privacy Policy</a></li>
            <li class="link-item"><a href="#">Shipping Details</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Support</h4>
          <ul class="footer-link-list">
            <li class="link-item"><a href="#">Contact Us</a></li>
            <li class="link-item"><a href="#">About Us</a></li>
            <li class="link-item"><a href="#">Carrers</a></li>
            <li class="link-item"><a href="#">Refund & Return</a></li>
            <li class="link-item"><a href="#">Deliveries</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Contact Us</h4>
          <ul class="footer-link-list">
            <li class="link-item">
              <span class="footer-icon icon-home"></span>
              <span>Address</span>
            </li>
            <li class="link-item">
              <span class="footer-icon icon-phone"></span>
              <span>+1800 12345678</span>
            </li>
            <li class="link-item">
              <span class="footer-icon icon-envelope"></span>
              <span>support@example.com</span>
            </li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Connect with us</h4>
          <ul class="social-list">
            <li class="social-item">
              <a href="#">
                <span class="icon-facebook"></span>
              </a>
            </li>
            <li class="social-item">
              <a href="#">
                <span class="icon-twitter"></span>
              </a>
            </li>
            <li class="social-item">
              <a href="#">
                <span class="icon-instagram"></span>
              </a>
            </li>
            <li class="social-item">
              <a href="#">
                <span class="icon-youtube"></span>
              </a>
            </li>
          </ul>
        </div>
      </div> -->
    </div>
    <div class="footer-bottom">
      Copyright © 2020 Vietpho. All Rights Reserved.
    </div>
    <div
      class="scroll-top-btn"
      ref="scrollTopBtn"
      @click="scrollTop"
      :class="{ show: isShowBackToTop }"
    >
      <span class="icon-arrow-up2"></span>
    </div>
  </footer>
</template>
<script>
// import { globalFunction } from "@/global/global.js";

export default {
  data() {
    return {
      isShowBackToTop: false,
    };
  },

  computed: {},

  components: {},

  methods: {
    showHideScrollTopButton() {
      if (window.pageYOffset > 250) {
        this.isShowBackToTop = true;
      } else {
        this.isShowBackToTop = false;
      }
    },

    scrollTop() {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    },
  },

  created() {},
  destroyed() {
    window.removeEventListener("scroll", this.showHideScrollTopButton);
  },
  mounted() {
    window.addEventListener("scroll", this.showHideScrollTopButton);
  },
};
</script>
