import { defineNuxtPlugin } from "#app";
import aspida from "@aspida/axios";
import axios from "axios";
import api from "~/generated/api/$api";

export default defineNuxtPlugin((nuxtApp) => {
  const config = {
    // baseURL: process.env.API_BASE_URL,
    baseURL: "http://localhost:8080",
    headers: {
      "Content-Type": "application/json; utf-8",
    },
    withCredentials: true,
  };

  const axiosInstance = axios.create(config);

  // リクエストインターセプターを追加
  axiosInstance.interceptors.request.use(
    async (axiosConfig: any) => {
      // 必要に応じてトークンを取得し、リクエストヘッダーに追加する
      // const token = await getToken();
      // axiosConfig.headers.Authorization = `Bearer ${token}`;
      return axiosConfig;
    },
    (error) => Promise.reject(error)
  );

  const aspidaInstance = api(aspida(axiosInstance));

  return {
    provide: {
      api: aspidaInstance,
    },
  };
});
