import { useMutation } from '@tanstack/vue-query';
import { apiClient } from "@/libs/axios";
import { AxiosError } from "axios";
import { service } from "@/constants/service";

export async function createAnswer(questionId: number, replyData: any) {
  try {
    const response = await apiClient.questions._question_id(questionId).answers.$post({
      body: replyData,
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

export function useCreateAnswer() {
  return useMutation({
    mutationFn: (params: { questionId: number, replyData: any }) => createAnswer(params.questionId, params.replyData),
  });
}
