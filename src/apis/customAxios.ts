import axios from "axios";
import { accessTokenExpired } from "@/util/auth/accessTokenExpired";

const customAxios = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 10000,
});

customAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      accessTokenExpired();
    }
    return Promise.reject(error);
  }
);
export default customAxios;
