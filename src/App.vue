<template>
  <div id="app">
    <router-view />
    <!-- <Login /> -->
    <AppDataProvider />
    <LoadingState />
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppDataProvider from "@/providers/AppDataProvider.vue";
import LoadingState from "@/components/LoadingState.vue";
// import Login from "@/components/Login.vue";

export default {
  name: "App",

  components: {
    AppDataProvider,
    LoadingState,
    // Login,
  },

  data() {
    return {
      windowWidth: 0,
    };
  },

  computed: {
    ...mapState({
      isOnSmallScreen: (state) => state.helper.isOnSmallScreen,
    }),
  },

  methods: {
    getWindowWidth() {
      this.windowWidth = document.documentElement.clientWidth;
      this.detectScreenSize();
    },

    detectScreenSize() {
      if (this.windowWidth < 992) {
        this.$store.commit("helper/setDetectScreenSize", true);
      } else {
        this.$store.commit("helper/setDetectScreenSize", false);
      }
    },
  },

  created() {},

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.getWindowWidth);

      //Init
      this.getWindowWidth();
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
  },
};
</script>

<style lang="scss">
@import "css/styles.scss";
</style>
