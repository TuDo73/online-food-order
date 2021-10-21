<template>
  <header>
    <div class="header-wrapper">
      <div class="container">
        <div class="header-content">
          <div class="site-logo" @click="goToHomepage">
            <img src="../assets/images/logo-neu.png" alt="logo" />
          </div>
          <div class="header-col-right">
            <div class="language-box">
              <div
                class="lang-box-wrap"
                :class="{ open: isShowLangOpt }"
                @click="showLangOpt()"
                ref="langBox"
              >
                <div
                  class="lang-opt"
                  :class="{ active: lang == 'de' }"
                  @click="changeLang('de')"
                >
                  <div class="lang-flag de-flag"></div>
                  <span>DE</span>
                  <div class="overlay-btn"></div>
                </div>
                <div
                  class="lang-opt"
                  :class="{ active: lang == 'vi' }"
                  @click="changeLang('vi')"
                >
                  <div class="lang-flag vi-flag"></div>
                  <span>VI</span>
                  <div class="overlay-btn"></div>
                </div>
                <div
                  class="lang-opt"
                  :class="{ active: lang == 'en' }"
                  @click="changeLang('en')"
                >
                  <div class="lang-flag en-flag"></div>
                  <span>EN</span>
                  <div class="overlay-btn"></div>
                </div>
              </div>
            </div>
            <div class="header-infor-wrap">
              <div class="header-infor">
                <div class="infor-col">
                  <span class="infor-icon icon-phone"></span>
                  <span class="call-us"
                    >Call Us:
                    {{ restaurantData ? restaurantData.phone : "" }}</span
                  >
                </div>
                <div class="infor-col">
                  <span class="infor-icon icon-envelope"></span>
                  <span class="email"
                    >Mail:
                    {{ restaurantData ? restaurantData.email : "" }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// import { globalFunction } from "@/global/global.js";
import { mapState } from "vuex";

export default {
  data() {
    return {
      isShowLangOpt: false,
    };
  },

  computed: {
    ...mapState({
      lang: (state) => state.i18n.lang,
      restaurantData: (state) => state.restaurant.restaurantData,
    }),
  },

  components: {},

  methods: {
    showLangOpt() {
      let langBox = this.$refs.langBox;
      let hLangBox = 0;
      let hLangOpt = 0;
      let langOpt = document.querySelectorAll(".lang-opt");
      for (let i = 0; i < langOpt.length; i++) {
        let hlangOpt = langOpt[i].getBoundingClientRect().height;
        hLangOpt = hlangOpt;
        hLangBox += hlangOpt;
      }
      if (this.isShowLangOpt) {
        langBox.style.height = hLangOpt + "px";
      } else {
        langBox.style.height = hLangBox + 1 + "px";
      }
      this.isShowLangOpt = !this.isShowLangOpt;
    },

    changeLang(langData) {
      this.$store.commit("i18n/setLang", langData);
      // this.$i18n.locale = langData;
    },

    goToHomepage() {
      if (this.$route.path != "/") this.$router.push({ path: "/" });
    },
  },

  created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
