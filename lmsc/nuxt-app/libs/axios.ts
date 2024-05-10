import aspida from "@aspida/axios";
import axios from "axios";
import { config } from "@/config";
import api from "@/generated/api/$api";

const axiosInstance = axios.create({
  baseURL: config.apiEndpoint,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
export const apiClient = api(aspida(axiosInstance));
