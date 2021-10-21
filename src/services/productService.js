import api from "@/services/api";

const BASE_PATH = `md_product`;

export default {
  getAll(restaurantCode) {
    const url = `${BASE_PATH}/selectall?restaurant_code=${restaurantCode}`;

    return api().get(`${url}`);
  },
};
