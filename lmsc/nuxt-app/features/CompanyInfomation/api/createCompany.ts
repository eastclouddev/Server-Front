import { useMutation } from '@tanstack/vue-query';
import { apiClient } from "@/libs/axios";
import { AxiosError } from "axios";
import { service } from "@/constants/service";


export async function createCompany(companyData: any) {
  try {
    const response = await apiClient.companies.$post({
      body: companyData,
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
