import aspida from "@aspida/axios";
import axios from "axios";
import { config } from "@/config";
import api from "@/generated/api/$api";

const axiosInstance = axios.create({
  baseURL: config.apiEndpoint,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // クロスオリジン通信時のクッキーの送信を許可する
});

export default axiosInstance;
export const apiClient = api(aspida(axiosInstance));
