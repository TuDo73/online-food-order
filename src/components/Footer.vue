<template>
  <footer ref="footer">
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
