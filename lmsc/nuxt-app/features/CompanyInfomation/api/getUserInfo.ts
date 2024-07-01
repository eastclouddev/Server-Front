import { apiClient } from "@/libs/axios";
import { AxiosError } from "axios";
import { service } from "@/constants/service";


export async function getCompanyInfo(company_id: number) {
  try {
    const response = await apiClient.companies._company_id(company_id).$get();
    return response;
  } catch (err) {
    const axiosError = err as AxiosError;
    if (axiosError.response?.status !== 404) {
      throw new Error(service.apiFetchError);
    }
    throw err;
  }
}

export async function getBillingInfo(company_id: number, billing_info_id: number) {
  try {
    const response = await apiClient.companies._company_id(company_id).billing_info._billing_info(billing_info_id).$get();
    return response;
  } catch (err) {
    const axiosError = err as AxiosError;
    if (axiosError.response?.status !== 404) {
      throw new Error(service.apiFetchError);
    }
    throw err;
  }
}