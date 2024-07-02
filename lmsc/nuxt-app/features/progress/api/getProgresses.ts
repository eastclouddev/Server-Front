/* eslint-disable no-underscore-dangle */
import { useAsyncData } from "#app";
import { apiClient } from "@/libs/axios";
import { AxiosError } from "axios";
import { service } from "@/constants/service";

// 進捗管理一覧（管理者）
export async function getProgresses() {
  try {
    const response = await apiClient.progresses.$get();
    return response;
  } catch (err) {
    const axiosError = err as AxiosError;
    if (axiosError.response?.status !== 404) {
      throw new Error(service.apiFetchError);
    }
    throw err;
  }
}

export function useGetProgresses() {
  const { data, error, status } = useAsyncData(
    `progresses`,
    () => getProgresses(),
    { server: true }
  );

  return { data, error, status };
}
