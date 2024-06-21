/* eslint-disable no-underscore-dangle */
import { useAsyncData } from "#app";
import { apiClient } from "@/libs/axios";
import { AxiosError } from "axios";
import { service } from "@/constants/service";

export async function getQuestionThread(questionId: number) {
  try {
    const response = await apiClient.questions._question_id(questionId).$get();
    return response;
  } catch (err) {
    const axiosError = err as AxiosError;
    if (axiosError.response?.status !== 404) {
      throw new Error(service.apiFetchError);
    }
    throw err;
  }
}

export function useGetQuestionThread(questionId: number) {
  const { data, pending, error, status } = useAsyncData(
    `questions-${questionId}`,
    () => getQuestionThread(questionId),
    { server: true , lazy: true}
  );

  return { data, pending, error, status };
}
