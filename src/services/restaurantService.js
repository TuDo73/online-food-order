import api from "@/services/api";

const BASE_PATH = `sys_restaurant`;

export default {
  getByCode(restaurantCode) {
    const url = `${BASE_PATH}/select?code=${restaurantCode}`;

    return api().get(`${url}`);
  },
};
