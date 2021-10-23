<template>
  <div></div>
</template>
<script>
import { mapState } from "vuex";
import restaurantService from "@/services/restaurantService";

export default {
  data() {
    return {};
  },

  computed: {
    ...mapState({
      restaurantCode: (state) => state.restaurant.restaurantCode,
      restaurantData: (state) => state.restaurant.restaurantData,
    }),
  },

  components: {},

  methods: {
    async getRestaurantData() {
      this.$store.commit("helper/setLoadingState", true);
      try {
        const restaurantData = await restaurantService.getByCode(
          this.restaurantCode
        );
        this.$store.commit(
          "restaurant/setRestaurantData",
          restaurantData.data[0]
        );
      } catch (error) {
        this.$store.commit("helper/setLoadingState", true);
      }
    },

    restaurantDataCheck() {
      if (!this.restaurantData) {
        this.getRestaurantData();
      }
    },
  },

  created() {
    this.restaurantDataCheck();
  },
};
</script>
