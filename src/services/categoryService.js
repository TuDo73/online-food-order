import api from "@/services/api";

const BASE_PATH = `md_category`;

export default {
  getAll(restaurantCode) {
    const url = `${BASE_PATH}/selectall?restaurant_code=${restaurantCode}`;

    return api().get(`${url}`);
  },
};
