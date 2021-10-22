import axios from "axios";

export default (accessToken = "") => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (accessToken !== "") {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  return axios.create({
    baseURL: `${GLOBAL_BACKEND}/`,
    withCredentials: false,
    headers,
  });
};
