/* eslint-disable no-underscore-dangle */
import { useAsyncData } from "#app";
import { apiClient } from "@/libs/axios";
import { AxiosError } from "axios";
import { service } from "@/constants/service";

// 進捗管理一覧（法人、法人代行）
export async function getCorporationProgresses(companyId: number) {
  try {
    const response = await apiClient.companies._company_id_number(companyId).progresses.$get();
    return response;
  } catch (err) {
    const axiosError = err as AxiosError;
    if (axiosError.response?.status !== 404) {
      throw new Error(service.apiFetchError);
    }
    throw err;
  }
}

export function useGetCorporationProgresses(companyId: number) {
  const { data, error, status } = useAsyncData(
    `corporation-progresses-${companyId}`,
    () => getCorporationProgresses(companyId),
    { server: true }
  );

  return { data, error, status };
}
