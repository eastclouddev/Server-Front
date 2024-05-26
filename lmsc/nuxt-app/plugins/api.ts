import { defineNuxtPlugin } from "#app";
import aspida from "@aspida/axios";
import axiosInstance from "@/libs/axios";
import api from "~/generated/api/$api";

export default defineNuxtPlugin((nuxtApp) => {
  const aspidaInstance = api(aspida(axiosInstance));

  return {
    provide: {
      api: aspidaInstance,
    },
  };
});
