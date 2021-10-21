<template>
  <transition name="fade">
    <div class="loading-box" v-if="$store.state.helper.isShowLoading">
      <div class="loading-box-wrap">
        <div class="loading-container">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
          <div class="shape shape-4"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {},
};
</script>

<style></style>
