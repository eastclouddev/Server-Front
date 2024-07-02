import { useMutation } from '@tanstack/vue-query';
import { apiClient } from "@/libs/axios";
import { AxiosError } from "axios";
import { service } from "@/constants/service";


export async function createBillingInfo(requestBody: any,company_id: number) {
  try {
    const response = await apiClient.companies._company_id(company_id).billing_info.$post({
      body: requestBody, 
    });
    return response;
  } catch (err) {
    const axiosError = err as AxiosError;
    if (axiosError.response?.status !== 404) {
      throw new Error(service.apiFetchError);
    }
    throw err;
  }
}
